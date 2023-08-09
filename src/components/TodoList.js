import Todo from './Todo';

// const props = {todos: [], addTodo: func(), completeTodo: func()}

// const {todos, addTodo, completeTodo} = {todos: [], addTodo: func(), completeTodo: func()}

export default function TodoList({
  todos,
  addTodo,
  completeTodo,
  editTodoText,
  deleteTodo,
}) {
  return (
    <div>
      <h1>Create Todo</h1>
      {/* The input tag is the evt.target in the addTodo function. The input is the element that is firing the event of onKeyDown */}
      <input
        type="text"
        onKeyDown={(evt) => {
          if (evt.key === 'Enter') {
            addTodo(evt);
          }
        }}
      />
      {todos.length ? (
        <>
          <h1>Todo Items</h1>
          <ul className="todolist">
            {todos
              .filter((todo) => !todo.completed)
              .map((todo) => {
                return (
                  // props.completeTodo
                  <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo={deleteTodo}
                  />
                );
              })}
          </ul>
          <h1>Completed Items </h1>
          <ul className="todolist">
            {todos
              .filter((todo) => todo.completed)
              .map((todo) => {
                return (
                  <Todo
                    key={todo.id}
                    todo={todo}
                    completeTodo={completeTodo}
                    editTodoText={editTodoText}
                    deleteTodo={deleteTodo}
                  />
                );
              })}
          </ul>
        </>
      ) : (
        <h1>No Todos Added Yet</h1>
      )}
    </div>
  );
}
