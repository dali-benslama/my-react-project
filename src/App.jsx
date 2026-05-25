const courseTitle = "Advanced Web Development";
function App() {
  const studentName = "Mohamed Ali Ben Slama";
  const student = {
    name: "Mohamed Ali Ben Slama",
    age: 20,
    track: "Web Development"
  };
  function sayHello() {
    return "Hello, " + studentName + "! Welcome to the course.";
  }
  return (
    <div>
      <p>{courseTitle}</p>
      <h1>daliben8</h1>
      <p>{studentName}</p>
      <p>Welcome to {courseTitle}, {studentName}!</p>
      <label htmlFor="username">Enter your username:</label>
<input type="text" id="username" />
<p>Name: {student.name}</p>
<p>Age: {student.age}</p>
<p>Track: {student.track}</p>
<p>{sayHello()}</p>
    </div>
  );
}

export default App;
// 1. One thing I understand well: using {} to display variables in JSX
// 2. One thing still confusing: the difference between inside and outside component variables
// 3. One mistake I made and fixed: putting sayHello function inside the student object