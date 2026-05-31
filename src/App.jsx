import { useState, useEffect } from "react";

const stories = [
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

const Item = ({ story }) => (
  <div>
    <h3>
      <a href={story.url} target="_blank">{story.title}</a>
    </h3>
    <p>By: <span>{story.author}</span></p>
    <p>Points: <span>{story.points}</span></p>
    <p>Comments: <span>{story.num_comments}</span></p>
  </div>
);

const List = ({ stories }) => (
  <div>
    {stories.map((story) => (
      <Item key={story.objectID} story={story} />
    ))}
  </div>
);

const Search = ({ searchTerm, onSearch }) => (
  <div>
    <label htmlFor="search">Search: </label>
    <input
      type="text"
      id="search"
      value={searchTerm}
      onChange={(event) => onSearch(event.target.value)}
    />
  </div>
);

const App = () => {
  const [searchTerm, setSearchTerm] = useState(
    localStorage.getItem("search") || ""
  );

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <List stories={filteredStories} />
    </div>
  );
};

export default App;

// Reflection:
// 1. A controlled component is an input whose value is controlled by React state
// 2. A side effect is anything that happens outside React rendering, like localStorage or API calls
// 3. useEffect runs after render and lets us safely handle side effects without blocking the UI