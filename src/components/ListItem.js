import React from "react";

const ListItem = ({ to_do, handleCompleteChange, handleDelete, isDark }) => {
  return (
    <div
      key={to_do.id}
      className={`${
        isDark ? "bg-gray-600" : "bg-gray-100"
      } px-4 py-3 my-3 flex w-full items-center justify-between rounded`}
    >
      <div>
        <input
          type="checkbox"
          checked={to_do.completed}
          onChange={() => handleCompleteChange(to_do.id)}
        />
        <span className={`${isDark ? "text-gray-100" : "text-gray-900"} ml-2`}>
          {to_do.title}
        </span>
      </div>

      <div>
        <button onClick={() => handleDelete(to_do.id)}>X</button>
      </div>
    </div>
  );
};

export default ListItem;
