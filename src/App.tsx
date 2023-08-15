import { useState, useEffect } from "react";
import "./App.css";
import Loader from "./components/Loader";
import Todo from "./components/Todo";
import { TodoType } from "./types/Todo.types";

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(res => setTodos(res.slice(0, 10)))
      .catch(err => setError(err))
  }, []);

  return (
    <div className="App">
      {todos.length > 0 ? todos.map((todo: TodoType) => <Todo todo={todo} />) : <Loader />}
    </div>
  );
}

export default App;
