import React from 'react'
import './styles/App.sass'
import TodoForm from './containers/TodoForm'
import TodoList from './containers/TodoList'
import AddButton from './containers/AddButton'
import Header from './components/Header'

function App() {
  return (
    <div className="App" data-testid='app'>
      <Header />
      <TodoList />
      <AddButton />
      <TodoForm />
    </div>
  );
}

export default App
