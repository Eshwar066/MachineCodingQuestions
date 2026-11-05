import { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Add Todo
  const addTodo = (e) => {
    e.preventDefault();

    if (!todo.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: todo.trim(),
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setTodo("");
  };

  // Toggle Todo
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "40px auto" }}>
      <h2>Todo List</h2>

      {/* Add Todo */}
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter a todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      {/* Todo List */}
      {todos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        <ul>
          {todos.map((item) => (
            <li key={item.id} style={{ margin: "12px 0" }}>
              <span
                onClick={() => toggleTodo(item.id)}
                style={{
                  cursor: "pointer",
                  textDecoration: item.completed
                    ? "line-through"
                    : "none",
                }}
              >
                {item.text}
              </span>

              <button
                onClick={() => deleteTodo(item.id)}
                style={{ marginLeft: "12px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <p>Total: {todos.length}</p>
      <p>Completed: {todos.filter((item) => item.completed).length}</p>
    </div>
  );
}