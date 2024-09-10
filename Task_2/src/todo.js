var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
    }
    TodoList.prototype.addTodo = function (title) {
        var newTodo = {
            id: this.todos.length + 1,
            title: title,
            completed: false
        };
        this.todos.push(newTodo);
    };
    TodoList.prototype.removeTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
    };
    TodoList.prototype.displayTodos = function () {
        console.log(this.todos);
    };
    return TodoList;
}());
// Example usage
var todoList = new TodoList();
todoList.addTodo("Learn TypeScript");
todoList.addTodo("Write Code");
todoList.displayTodos();
todoList.removeTodo(1);
todoList.displayTodos();
