import { useState } from 'react';

export default function Todo(props) {
  const [showInput, setShowInput] = useState(false);

  const handleClick = () => {
    setShowInput(!showInput);
  };

  const handleDelete = () => {
    props.deleteTodo(props.todo.id);
  };

  return (
    <li>
      <div>
        <h2 onClick={handleClick}>{props.todo.text}</h2>
        <input
          style={{ display: showInput ? 'block' : 'none' }}
          type="text"
          onKeyDown={(evt) => {
            // have to actually reference props because we didn't destructure above
            if (evt.key === 'Enter') {
              props.editTodoText(props.todo.id, evt);
            }
          }}
        />
      </div>
      <label>
        Complete:
        <input
          type="checkbox"
          checked={props.todo.completed}
          onChange={(e) => {
            props.completeTodo(props.todo.id);
          }}
        />
      </label>
      <button onClick={handleDelete}>Delete Todo</button>
    </li>
  );
}
