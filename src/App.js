import './styles.css';
import { useEffect, useReducer } from 'react';
import TodoList from './components/TodoList';
import todoReducer from './reducers/todoReducer';

export default function App() {
  const [todosState, dispatch] = useReducer(todoReducer, []);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    console.log(savedTodos);
    if (savedTodos && savedTodos !== 'undefined' && savedTodos !== 'null') {
      dispatch({ type: 'setTodos', payload: JSON.parse(savedTodos) });
    }
  }, []);

  return (
    <div className="App">
      <TodoList todos={todosState} dispatch={dispatch} />
    </div>
  );
}
