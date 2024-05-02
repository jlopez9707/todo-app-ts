import React, { useState, createContext } from "react";
import "./style.css";
import { Todos } from "./components/Todos";
import { FilterValue, TodoCompleted, TodoId, TodoTitle } from "./types";
import { TODO_FILTERS } from "./consts";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const mockTodos = [
  {
    id: 1,
    title: "Ver el twitch de midu",
    completed: true,
  },
  {
    id: 2,
    title: "Aprender React con typescript",
    completed: false,
  },
  {
    id: 3,
    title: "Sacar ticket de miduFast",
    completed: false,
  },
];

export const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [filter, setFilter] = useState<FilterValue>(TODO_FILTERS.ALL);

  const handleRemove = (id: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  };

  const handleCompleted = (id: TodoId, completed: TodoCompleted): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const onFilterChange = (filter: FilterValue) => {
    setFilter(filter);
  };

  const onClearCompleted = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };
  const onAddTodo = (title: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const activeCount = todos.filter((todo) => !todo.completed).length;
  const completedCount = todos.length - activeCount;

  const filteredTodos = todos.filter((todo) => {
    if (filter === TODO_FILTERS.ACTIVE) return !todo.completed;
    if (filter === TODO_FILTERS.COMPLETED) return todo.completed;
    return todo;
  });

  return (
    <>
      <div className="todoapp">
        <Header onAddTodo={onAddTodo}></Header>
        <Todos
          todos={filteredTodos}
          handleRemove={handleRemove}
          handleCompleted={handleCompleted}
        ></Todos>
        <Footer
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={onClearCompleted}
          filterSeleced={filter}
          onFilterChange={onFilterChange}
        ></Footer>
      </div>
    </>
  );
};
