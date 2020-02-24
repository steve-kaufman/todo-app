import React from 'react'
import './styles/App.sass'
import TodoList from './containers/TodoList'

function App() {
  return (
    <div className="App" data-testid='app'>
      <TodoList />
    </div>
  );
}

export default App
