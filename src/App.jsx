// Story data structure:
// {
//   objectID: unique identifier → used as React key
//   title: title of the article
//   url: link to the article
//   author: who posted it
//   points: popularity score
//   num_comments: number of comments
// }
// objectID is used as key because it is unique and stable
// This structure is realistic because it matches real API responses

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

function App() {
  return (
    <div>
      <h1>Hacker News Stories</h1>
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

export default App;

// 1. map() is essential because it returns a new array of JSX elements to render
// 2. objectID is the correct key because it is unique and never changes
// 3. When using the real API, stories will come from a fetch() call instead of a fixed array