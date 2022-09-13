import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const initialTodoList = localStorage.getItem("todoList")
    ? JSON.parse(localStorage.getItem("todoList"))
    : [];
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState(initialTodoList);
  const [isDark, setIsDark] = useState(false);
  const handleAddTodo = (e) => {
    e.preventDefault();

    if (todo.trim() === "") {
      alert("할일을 적어주세요!");
      return;
    }
    let newTodoData = {
      id: Date.now(),
      title: todo,
      completed: false,
    };
    let newTodoList = [...todolist, newTodoData];
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
    setTodo("");
  };

  const handleCompleteChange = (id) => {
    let newTodoList = todolist.map((to_do) => {
      if (to_do.id === id) {
        to_do.completed = !to_do.completed;
      }
      return to_do;
    });

    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  const handleDelete = (id) => {
    let newTodoList = todolist.filter((to_do) => {
      return to_do.id !== id;
    });

    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };

  const handleDeleteAll = () => {
    setTodoList([]);
    localStorage.setItem("todoList", JSON.stringify([]));
  };

  const toggleMode = () => {
    setIsDark((prev) => !prev);
  };
  return (
    <div
      className={`${
        isDark ? "bg-black" : "bg-pink-100"
      } w-screen h-screen m-auto flex justify-center items-center relative`}
    >
      <h1
        className={`${
          isDark ? "text-white" : "text-gray-800"
        } absolute top-5  text-2xl md:text-4xl md:top-10`}
      >
        항상 착실하게 하자
      </h1>
      <div
        className={`${
          isDark ? "bg-gray-900" : "bg-white"
        } w-screen p-6 shadow-lg mx-8 md:max-w-lg rounded-lg`}
      >
        <div className="flex justify-between items-center">
          <h1
            className={`${isDark ? "text-gray-300" : "text-gray-800"} text-2xl`}
          >
            할 일 목록
          </h1>
          <div>
            <button
              className={`${isDark ? "text-gray-200" : "text-black"}`}
              onClick={handleDeleteAll}
            >
              Delete All
            </button>
            <button
              className={`${isDark ? "text-gray-200" : "text-black"} ml-3`}
              onClick={toggleMode}
            >
              {isDark ? "Light" : "Dark"}
            </button>
          </div>
        </div>

        <List
          handleCompleteChange={handleCompleteChange}
          handleDelete={handleDelete}
          todolist={todolist}
          setTodoList={setTodoList}
          isDark={isDark}
        />
        <Form
          handleAddTodo={handleAddTodo}
          setTodo={setTodo}
          todo={todo}
          isDark={isDark}
        />
      </div>
    </div>
  );
}

export default App;
