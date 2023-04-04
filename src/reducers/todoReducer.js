const todoReducer = (state, action) => {
  const { type, payload } = action;
  const todosCopy = [...state];
  let indexOfTodo;
  if (payload.id) {
    //using the findIndex array method to find the target todo obj with a given id.
    indexOfTodo = todosCopy.findIndex((todo) => todo.id === payload.id);
  }
  switch (type) {
    case 'setTodos':
      return payload;

    case 'addTodo':
      // Creating a new Todo obj
      const newTodo = {
        // assigning text key to user input
        text: payload.text,
        completed: false,
        // Creating an uniqure identifier with Date.now() (nothing to do with the date, just using because it's unique)
        id: Date.now(),
      };
      console.log(newTodo);
      // setting todos state, to a copy of the current todos arr and adding the newTodo to the beginning
      localStorage.setItem('todos', JSON.stringify([newTodo, ...state]));
      return [newTodo, ...state];

    case 'completeTodo':
      // Changing the completed property on the todo obj to true/false
      todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed;
      // updating our todos state with the manipulated copy so React will rerender
      localStorage.setItem('todos', JSON.stringify(todosCopy));
      console.log(todosCopy);
      return todosCopy;

    case 'editTodoText':
      // Reassigning the text property to the value(user's input)
      todosCopy[indexOfTodo].text = payload.text;
      // updating our todos state with the manipulated copy so React will rerender
      localStorage.setItem('todos', JSON.stringify(todosCopy));
      //Setting the value back to nothing, so the user doesnt have to delete
      return todosCopy;

    case 'deleteTodo':
      //using the findIndex array method to find the target todo obj with a given id.
      // const indexOfTodo = todosCopy.findIndex((todo) => todo.id === id);
      todosCopy.splice(indexOfTodo, 1);

      localStorage.setItem('todos', JSON.stringify(todosCopy));
      return todosCopy;

    default:
      return state;
  }
};

export default todoReducer;
