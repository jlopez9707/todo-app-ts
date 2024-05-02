import React from "react";
import { TodoCompleted, TodoId, type Todo as TodoType } from "../types";

interface Props extends TodoType {
  handleRemove: (id: TodoId) => void;
  handleCompleted: (id: TodoId, completed: TodoCompleted) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  handleRemove,
  handleCompleted,
}) => {
  const handleButton = () => {
    handleRemove(id);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleCompleted(id, event.target.checked);
  };

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={completed}
        onChange={handleChange}
      />
      <label>{title}</label>
      <button className="destroy" onClick={handleButton}></button>
    </div>
  );
};
