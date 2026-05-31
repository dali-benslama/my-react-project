import { useState, useEffect } from "react";

const initialStories = [
  {
    objectID: 1,
    title: "React is the future of web development",
    url: "https://reactjs.org",
    author: "dali-benslama",
    points: 120,
    num_comments: 35,
  },
  {
    objectID: 2,
    title: "Vite makes React development faster",
    url: "https://vitejs.dev",
    author: "evan-you",
    points: 85,
    num_comments: 20,
  },
  {
    objectID: 3,
    title: "JavaScript is everywhere",
    url: "https://developer.mozilla.org",
    author: "mdn-web",
    points: 200,
    num_comments: 50,
  },
];

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

  const [stories, setStories] = useState(initialStories);

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRemoveItem = (item) => {
    setStories(stories.filter((story) => story.objectID !== item.objectID));
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <List stories={filteredStories} onRemoveItem={handleRemoveItem} />
    </div>
  );
};

export default App;

// Reflection:
// 1. A component is reusable when it accepts dynamic props instead of hard-coded values
// 2. Component composition is using children to pass content into a component
// 3. We pass handlers down the tree because the parent owns the state and must control changes