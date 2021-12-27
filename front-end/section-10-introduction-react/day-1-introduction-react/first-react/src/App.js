import React from "react";
import "./App.css";

const Task = (value) => {
  return <li key={value}>{value}</li>;
};

const tasksOfTheDay = [
  "Buy Groceries",
  "Take Yoga Class",
  "Go to Work",
  "Check Black Friday Prices",
];

class App extends React.Component {
  render() {
    return (
      <>
        <h1>My First React List</h1>
        <ul>{tasksOfTheDay.map((tasks) => Task(tasks))}</ul>
      </>
    );
  }
}

export default App;
