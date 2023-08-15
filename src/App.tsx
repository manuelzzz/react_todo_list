import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(res => setTodos(res.slice(0, 10)))
      .catch(err => setError(err))

  }, [])

  // dependency array
  // if the dependency array is present, the useEffect() will only
  // be called one time, and no more
  // but, if the dependency array is not at useEffect(), every time
  // the component being rendered

  // with dependency array, it works like "initState" from flutter stf widgets

  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
