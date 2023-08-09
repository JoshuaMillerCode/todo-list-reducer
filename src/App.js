import './styles.css';
// grab useState and useEffect from the react library, we use object destructuring
import { useState, useEffect } from 'react';
// importing the TodoList component from the TodoList file
// The only reason this work is because we are exporting in the TodoList file
import TodoList from './components/TodoList';

function App() {
  // Create the state variable and setter function by calling/invoking the useState function. The argument given to the useState func. is the starting value of the state.
  // const [one, two, three] = [1, 2, 3]
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos && savedTodos !== 'undefined' && savedTodos !== 'null') {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // the handler function for adding a todo, to the todo state
  // handleAddTodo
  const addTodo = (evt) => {
    // First we make a new Object with all the needed properties.
    const newTodo = {
      text: evt.target.value,
      id: Date.now(),
      completed: false,
    };
    // We then create a new array to avoid the pass by reference error and put our newly created todo at the beginning of the new array
    const newTodosArr = [newTodo, ...todos];

    localStorage.setItem('todos', JSON.stringify(newTodosArr));

    // set our state to the new modified todo array
    setTodos(newTodosArr);
    // reset the input field back to nothing.
    evt.target.value = '';
  };

  // the handler function for updating the completed property of the specifc todo object (handleCompleteTodo)
  const completeTodo = (id, e) => {
    // Making a copy of the todos state, to aviod pass by reference error
    const todosCopy = [...todos];
    // finding the index based on the ID passed into this function
    // that is the todo you want to update
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    // change the completed property to the opposite of what is is.
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed;

    localStorage.setItem('todos', JSON.stringify(todosCopy));

    // set the state of the newly modified todos array.
    setTodos(todosCopy);
  };

  const editTodoText = (id, evt) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    todosCopy[indexOfTodo].text = evt.target.value;

    localStorage.setItem('todos', JSON.stringify(todosCopy));

    setTodos(todosCopy);
    evt.target.value = '';
  };

  const deleteTodo = (id) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    todosCopy.splice(indexOfTodo, 1);

    localStorage.setItem('todos', JSON.stringify(todosCopy));

    setTodos(todosCopy);
  };

  return (
    <div className="App">
      <TodoList
        todos={todos}
        addTodo={addTodo}
        completeTodo={completeTodo}
        editTodoText={editTodoText}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
