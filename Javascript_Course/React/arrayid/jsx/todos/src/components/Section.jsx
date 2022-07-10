import React from 'react';

function Section() {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  function generateId() {
    return Date.now();
  }

  function addTodoHandler(event) {
    event.preventDefault();
    setTodos([...todos, {
      id: generateId(), // generate unique ID
      activity: activity,
    },
    ]);
    setActivity('');
  }

  function removeTodoHandler(todoId) {
    const filter = todos.filter((todo) => {
      //console.log(todoId, todo.id);
      return todo.id !== todoId; 
    });

    setTodos(filter);
  }

  return(
    <>
      <div className="mt-8 flex items-center justify-center">
      <h1 className="text-3xl">Todo List</h1>
      </div>
      <div className="mt-16 flex items-center justify-center">
      <form onSubmit={addTodoHandler}>
        <input type="text" 
          placeholder="Nama Aktivitas"
          value={activity}
          onChange={(event) => {
          setActivity(event.target.value);
        }} />
        <button type="submit">Tambahkan</button>
      </form>
        </div>
        <div className="mt-16 flex items-center justify-center">

      <ul>
{todos.map((todo) => {
          return <li key={todo.id}>{todo.activity}
          <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button>
          </li>
        })}
      </ul>
      </div>
    </>
  )
}

export default Section;
