/*
    Create a to-do application with CRUD operations
    CRUD stands for
    - CREATE
    - READ (Display or List)
    - UPDATE
    - DELETE
 */

var todos = ['item 1', 'item 2', 'item 3'];

function createTodo() {
    todos.push('new item');
}

function displayTodo() {
    console.log("My todos", todos);
}

function updateTodo(position, newValue) {
    todos[position] = newValue;
}

function deleteTodo(position) {
    todos.splice(position, 1);
}


// Test functionality
console.log('---Original Array');
displayTodo();
console.log('\n---Create Todo (new item)');
createTodo();
displayTodo();
console.log('\n---Update Todo (updated item)');
updateTodo(2, 'updated item');
displayTodo();
console.log('\n---Delete Todo (item one)');
deleteTodo(0);
displayTodo();

