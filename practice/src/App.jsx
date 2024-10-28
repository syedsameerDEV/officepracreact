import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };


  
  const [newarr, setNewArr] = useState([]);
  const handleAdd = (e) => {
    e.preventDefault();
    setNewArr([...newarr, { id: newarr.length + 1, title: name }]);
    setName("");
  };


  
  const handelDelete = (index) => {
    let temp = newarr.filter((item) => {
      if (item.id === index) {
        return false;
      }
      return true;
    });
    setNewArr(temp);
  };
  return (
    <>
      <div>
        <h1>Todo</h1>
        <input
          type="text"
          placeholder=""
          value={name}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add</button>
        <ul>
          {newarr.map((item) => {
            return (
              <li>
                <span>{item.title}</span>{" "}
                <button
                  onClick={() => {
                    handelDelete(item.id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
