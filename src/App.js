import React from 'react'
import './styles/App.sass'
import { AddButton, CompletedTodos, TodoList, TodoForm } from './containers'
import { Header } from './components'

function App() {
  return (
    <div className="App" data-testid='app'>
      <Header />
      <main>
        <TodoList />
        <h3 id='completed-header'>Completed</h3>
        <CompletedTodos />
      </main>
      <AddButton />
      <TodoForm />
    </div>
  );
}

export default App
