import React, { useState } from "react";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [todoForm, setTodoForm] = useState({ Task: "", Time: "" });

  function add(todoForm) {
    todoList.push(todoForm);
    setTodoList(todoList);
    setTodoForm({ Task: "", Time: "" });
  }

  function remove(index) {
    todoList.splice(index, 1);
    setTodoList([...todoList]);
  }

  return (
    <div className="box">
      <h1>Todo List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          add(todoForm);
        }}
      >
        <input
          type="text"
          placeholder="Task"
          value={todoForm.Task}
          onChange={(e) => {
            setTodoForm({ ...todoForm, Task: e.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Time"
          value={todoForm.Time}
          onChange={(e) => {
            setTodoForm({ ...todoForm, Time: e.target.value });
          }}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoList.map((todo, index) => {
          return (
            <li key={index}>
              {index} - {todo.Task} - {todo.Time}
              <button onClick={() => remove(index)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
