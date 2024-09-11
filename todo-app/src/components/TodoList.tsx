import { useState } from "react";
import TodoTypes from "../todo";
import TodoService from "../TodoService";
import TodoForm from "./TodoForm";
import { FaEdit, FaCheck } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import '../css/TodoList.css'


const TodoList = () => {
  const [todos, setTodos] = useState<TodoTypes[]>(TodoService.getAllTodos());
  const [edittingTodoId, setEditedTodoId] = useState<number | null>(null);
  const [editedTodoText, setEditedTodoText] = useState<string>("");

  const handleEditStart = (id: number, text: string) => {
    setEditedTodoId(id);
    setEditedTodoText(text);
  };
  const handleEditCancel = () => {
    setEditedTodoId(null);
    setEditedTodoText("");
  };

  const handleEditSave = (id: number) => {
    if (editedTodoText.trim() !== "") {
      const updatedTodo = TodoService.updateTodo({
        id,
        text: editedTodoText,
        isCompleted: false,
      });
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
      setEditedTodoId(null);
      setEditedTodoText("");
    }
  };

  //!Function to delete a todo
  const handleDeleteTodo = (id: number) => {
    TodoService.deleteTodo(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todoContainer">
      <div>
        <TodoForm setTodos={setTodos} />
      </div>

      {todos.map((todo) => (
        <div className="items" key={todo.id}>
          {edittingTodoId === todo.id ? (
            <div className="editedText">
              <input
                type="text"
                value={editedTodoText}
                onChange={(e) => setEditedTodoText(e.target.value)}
                autoFocus={true}
              />
              <button onClick={() => handleEditSave(todo.id)}>
                <FaCheck />
              </button>
              <button className="cancelBtn" onClick={handleEditCancel}>
                <GiCancel />
              </button>
            </div>
          ) : (
            <div className="editBtn">
              <span>{todo.text}</span>
              <button onClick={() => handleEditStart(todo.id, todo.text)}>
                <FaEdit />
              </button>
            </div>
          )}
          <button onClick={() => handleDeleteTodo(todo.id)}>
            <RiDeleteBin5Fill />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
