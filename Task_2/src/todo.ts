interface TodoItem {
    id: number;
    title: string;
    completed: boolean;
}

class TodoList {
    private todos: TodoItem[] = [];

    addTodo(title: string): void {
        const newTodo: TodoItem = {
            id: this.todos.length + 1,
            title: title,
            completed: false
        };
        this.todos.push(newTodo);
    }

    removeTodo(id: number): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    displayTodos(): void {
        console.log(this.todos);
    }
}

// Example usage
const todoList = new TodoList();
todoList.addTodo("Learn TypeScript");
todoList.addTodo("Write Code");
todoList.displayTodos();
todoList.removeTodo(1);
todoList.displayTodos();