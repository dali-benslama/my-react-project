// Story data structure:
// {
//   objectID: unique identifier → used as React key
//   title: title of the article
//   url: link to the article
//   author: who posted it
//   points: popularity score
//   num_comments: number of comments
// }

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

const Search = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
    console.log("User is typing...");
  };

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" onChange={handleChange} />
    </div>
  );
};

const List = () => (
  <div>
    {stories.map((story) => (
      <div key={story.objectID}>
        <h3>
          <a href={story.url} target="_blank">{story.title}</a>
        </h3>
        <p>By: <span>{story.author}</span></p>
        <p>Points: <span>{story.points}</span></p>
        <p>Comments: <span>{story.num_comments}</span></p>
      </div>
    ))}
  </div>
);

const App = () => (
  <div>
    <Header />
    <Search />
    <List />
  </div>
);

export default App;

// Reflection:
// 1. Concise body arrow functions are used when the function only returns a value
// 2. Block body arrow functions are used when we need to add logic inside
// 3. An event object contains information about the event, like target.value for input