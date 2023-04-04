import { useState } from 'react';

export default function Todo(props) {
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput(!showInput);
  };

  return (
    <li>
      <div className="left">
        <h2 onClick={handleClick}>{props.todo.text}</h2>

        <input
          style={{ display: showInput ? 'block' : 'none' }}
          type="text"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              props.dispatch({
                type: 'editTodoText',
                payload: { id: props.todo.id, text: e.target.value },
              });
              // props.editTodoText(props.todo.id, e);
              setShowInput(false);
              e.target.value = '';
            }
          }}
        />
      </div>

      <label>
        Complete
        <input
          checked={props.todo.completed}
          type="checkbox"
          onChange={() => {
            props.dispatch({
              type: 'completeTodo',
              payload: { id: props.todo.id },
            });
            // props.completeTodo(props.todo.id);
          }}
        />
      </label>
      <button
        style={{ display: props.todo.completed ? 'block' : 'none' }}
        onClick={() => {
          props.dispatch({
            type: 'deleteTodo',
            payload: { id: props.todo.id },
          });
          // props.deleteTodo(props.todo.id);
        }}
      >
        Delete Todo
      </button>
    </li>
  );
}
