import TodoTypes from "./todo";

const LOCAL_STORAGE_KEY = "todos";

const TodoService = {
  // The getAllTodos method returns an array of TodoTypes objects.
  getAllTodos: (): TodoTypes[] => {
    const todos = localStorage.getItem(LOCAL_STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
  },
  // The addTodo method takes a TodoTypes object as an argument and adds it to the local storage.
  addTodo: (text: string): TodoTypes => {
    const todos = TodoService.getAllTodos();
    const newTodo: TodoTypes = {
      id: todos.length + 1,
      text,
      isCompleted: false,
    };
    const updateTodos = [...todos, newTodo];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    return newTodo;
  },
  // The updateTodo method takes a TodoTypes object as an argument and updates the todo in the local storage
  updateTodo: (todo: TodoTypes): TodoTypes => {
    const todos = TodoService.getAllTodos();
    const updateTodos = todos.map((t) => (t.id === todo.id ? todo : t));
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));
    return todo;
  },
  //!The deleteTodo method takes an id as an argument and deletes the todo from the local storage.
  deleteTodo: (id: number): void => {
    const todos = TodoService.getAllTodos();
    const filteredTodos = todos.filter((t) => t.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredTodos));
  },
};

export default TodoService;
