import React from "react";

//pass in text and category from task list
//we don't need key as a prop
function Task({ text, category, handleDelete }) {

  const deleteButton = () => {
    
    handleDelete(text)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deleteButton}>X</button>
    </div>
  );
}

export default Task;
