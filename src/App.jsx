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

function Header() {
  return (
    <div>
      <h1>Hacker News Stories</h1>
    </div>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input type="text" id="search" />
    </div>
  );
}

function List() {
  return (
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
}

function App() {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  );
}

export default App;

// Reflection:
// 1. App is the main container that renders all other components
// 2. List is responsible for rendering the stories array
// 3. Search is responsible for displaying the search input
// 4. This structure is cleaner because each component has one responsibility