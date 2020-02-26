import React from 'react'
import './styles/App.sass'
import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList'

function App() {
  return (
    <div className="App" data-testid='app'>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App
