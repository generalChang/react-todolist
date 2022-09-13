import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import ListItem from "./ListItem";

const List = ({
  handleCompleteChange,
  handleDelete,
  todolist,
  setTodoList,
  isDark,
}) => {
  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newTodoList = [...todolist];
    const [reorderedItem] = newTodoList.splice(result.source.index, 1);
    newTodoList.splice(result.destination.index, 0, reorderedItem);
    setTodoList(newTodoList);
    localStorage.setItem("todoList", JSON.stringify(newTodoList));
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="todos">
        {(provided, snapshot) => (
          <div
            className="my-4 overflow-x-hidden px-3 max-h-96"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {todolist.map((to_do, index) => {
              return (
                <Draggable
                  key={to_do.id}
                  draggableId={to_do.id + ""}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ListItem
                        isDark={isDark}
                        to_do={to_do}
                        handleCompleteChange={handleCompleteChange}
                        handleDelete={handleDelete}
                      />
                    </div>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default List;
