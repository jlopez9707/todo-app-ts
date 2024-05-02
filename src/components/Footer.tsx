import React from "react";
import { Filters } from "./Filters";
import { FilterValue } from "../types";

interface Props {
  activeCount: number;
  completedCount: number;
  filterSelected: FilterValue;
  onClearCompleted: () => void;
  onFilterChange: (filter: FilterValue) => void;
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  completedCount = 0,
  onClearCompleted,
  filterSelected,
  onFilterChange,
}) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount} tareas pendientes</strong>
      </span>
      <Filters
        filterSelected={filterSelected}
        onFilterChange={onFilterChange}
      ></Filters>
      {completedCount > 0 && (
        <button className="clear-completed" onClick={onClearCompleted}>
          Borrar Completados
        </button>
      )}
    </footer>
  );
};
