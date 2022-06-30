import React, {useState} from 'react';
import './App.css';

function App() {

  const handleAddCheese = () => {
    setTodoList(["cheese"])
  }

  const [todoList, setTodoList] = useState<string[]>([])

  return (
    <div className="App">

      <div>
        {todoList}
      </div>

      <button onClick={handleAddCheese}>
        add cheese
      </button>
    </div>
  );
}

export default App;
