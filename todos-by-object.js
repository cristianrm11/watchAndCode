var myObj = {
    todos: [],
    displayTodos: function() {
      if (this.todos.length === 0) {
          console.log('Your todo list is empty');
      } else {
          console.log('My Todos');
          for (var i = 0; i < this.todos.length; i++) {
              if (this.todos[i].completed === true) {
                  console.log('(X)', this.todos[i].todoText);
              } else {
                  console.log('( )', this.todos[i].todoText);
              }
          }
      }
    },
    addTodo: function(todoText) {
      this.todos.push({
          todoText: todoText,
          completed: false
      }),
      this.displayTodos();
    },
    updateTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
      this.todos.slice(position, 1);
      this.displayTodos();
    },
    toogleAll: function() {
        // Reverse the values of completed of the todos
        // If completed then false, if false then completed
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        for (var i = 0; i < this.todos.length; i++){
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        if (completedTodos === totalTodos) {
            for (var i = 0; i < this.todos.length; i++){
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < this.todos.length; i++){
                this.todos[i].completed = true;
            }
        }
        this.displayTodos();
    },
    toggleCompleted: function (position) {
        // Flip the completed value of the todo
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
  }