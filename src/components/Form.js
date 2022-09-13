import React from "react";

const Form = ({ handleAddTodo, setTodo, todo, isDark }) => {
  const onTodoChange = (e) => {
    const {
      target: { value },
    } = e;
    setTodo(value);
  };

  return (
    <div>
      <form onSubmit={handleAddTodo} className="w-full flex justify-between">
        <input
          placeholder="할일을 적어주세요...."
          type="text"
          className="px-3 py-3 rounded border border-gray-400 w-full"
          value={todo}
          onChange={onTodoChange}
        />
        <input
          value="추가"
          type="submit"
          className={`${
            isDark
              ? "bg-gray-700 hover:text-gray-700 hover:bg-gray-300 hover:border-gray-700"
              : "bg-pink-400 hover:text-gray-600 hover:bg-white hover:border-pink-400"
          } px-4 py-3 ml-4 text-white rounded hover:border`}
        />
      </form>
    </div>
  );
};

export default Form;
