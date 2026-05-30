// Props: data passed from parent to child (read-only)
// State: data owned by a component that can change over time
// We lift state up so App can share searchTerm with both Search and List

import { useState } from "react";

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
  <div key={story.objectID}>
    <h3>
      <a href={story.url} target="_blank">{story.title}</a>
    </h3>
    <p>By: <span>{story.author}</span></p>
    <p>Points: <span>{story.points}</span></p>
    <p>Comments: <span>{story.num_comments}</span></p>
  </div>
);

const List = ({ stories }) => {
  console.log("List rendered");
  return (
    <div>
      {stories.map((story) => (
        <Item key={story.objectID} story={story} />
      ))}
    </div>
  );
};

const Search = ({ onSearch }) => {
  console.log("Search rendered");
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        type="text"
        id="search"
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
};

const App = () => {
  console.log("App rendered");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  const filteredStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search onSearch={handleSearch} />
      <List stories={filteredStories} />
    </div>
  );
};

export default App;

// Reflection:
// 1. Props are read-only data passed from parent to child. State is data owned by a component that can change.
// 2. We lift state up so multiple components can share and react to the same data.
// 3. Filtering logic should live in App because it owns both the data and the searchTerm.