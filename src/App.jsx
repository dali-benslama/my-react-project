import { useState, useEffect } from "react";

const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?query=";

const Header = () => (
  <div>
    <h1>Hacker News Stories</h1>
  </div>
);

const InputWithLabel = ({ id, value, onInputChange, type = "text", children }) => (
  <div>
    <label htmlFor={id}>{children}</label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onInputChange}
    />
  </div>
);

const Item = ({ story, onRemoveItem }) => (
  <div>
    <h3>
      <a href={story.url} target="_blank">{story.title}</a>
    </h3>
    <p>By: <span>{story.author}</span></p>
    <p>Points: <span>{story.points}</span></p>
    <p>Comments: <span>{story.num_comments}</span></p>
    <button onClick={() => onRemoveItem(story)}>Delete</button>
  </div>
);

const List = ({ stories, onRemoveItem }) => (
  <div>
    {stories.map((story) => (
      <Item key={story.objectID} story={story} onRemoveItem={onRemoveItem} />
    ))}
  </div>
);

const App = () => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  );

  const [url, setUrl] = useState(API_ENDPOINT + (localStorage.getItem("search") || ""));
  const [stories, setStories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if (!url) return;
    setIsLoading(true);
    setIsError(false);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setStories(data.hits);
        setIsLoading(false);
      })
      .catch(() => {
        setIsError(true);
        setIsLoading(false);
      });
  }, [url]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    setUrl(API_ENDPOINT + searchTerm);
  };

  const handleRemoveItem = (item) => {
    setStories(stories.filter((story) => story.objectID !== item.objectID));
  };

  return (
    <div>
      <Header />
      <InputWithLabel
        id="search"
        value={searchTerm}
        onInputChange={handleSearch}
      >
        <strong>Search:</strong>
      </InputWithLabel>
      <button
        disabled={!searchTerm}
        onClick={handleSubmit}
      >
        Submit
      </button>
      {isError && <p>Something went wrong. Please try again.</p>}
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List stories={stories} onRemoveItem={handleRemoveItem} />
      )}
    </div>
  );
};

export default App;

// Reflection:
// 1. useEffect is used for fetching because it runs after render and handles side effects safely
// 2. Loading state means data is being fetched. Error state means something went wrong.
// 3. We control when fetching happens to avoid unnecessary API calls on every keystroke