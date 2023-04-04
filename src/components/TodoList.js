import Todo from './Todo';

export default function TodoList(props) {
  const notCompleted = props.todos
    .filter((todo) => !todo.completed)
    .map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          // completeTodo={props.completeTodo}
          // editTodoText={props.editTodoText}
          // deleteTodo={props.deleteTodo}
          dispatch={props.dispatch}
        />
      );
    });

  // const completed = props.todos
  //   .filter((todo) => todo.completed)
  //   .map((todo) => {
  //     return (
  //       <Todo
  //         key={todo.id}
  //         todo={todo}
  //         completeTodo={props.completeTodo}
  //         editTodoText={props.editTodoText}
  //         deleteTodo={props.deleteTodo}
  //       />
  //     );
  //   });

  return (
    <>
      <h1>Create Todo</h1>
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            props.dispatch({
              type: 'addTodo',
              payload: { text: e.target.value },
            });
            e.target.value = '';
          }
        }}
      />
      {props.todos.length ? (
        <>
          <h1>Todo Items</h1>
          <ul className="todolist">{notCompleted}</ul>
          <h1>Completed Items</h1>
          <ul className="todolist">
            {props.todos
              .filter((todo) => todo.completed)
              .map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    // completeTodo={props.completeTodo}
                    // editTodoText={props.editTodoText}
                    // deleteTodo={props.deleteTodo}
                    dispatch={props.dispatch}
                  />
                );
              })}
          </ul>
        </>
      ) : (
        <h1>No Todos Added Yet</h1>
      )}
    </>
  );
}
