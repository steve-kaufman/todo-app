import React from 'react'
import './styles/App.sass'
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="App" data-testid='app'>
      <TodoList todos={[
        { id: 7, name: 'Trash', description: 'Take out the trash tonight', isCompleted: false },
        { id: 8, name: 'Dishes', description: 'Do the dishes', isCompleted: true }
      ]} />
    </div>
  );
}

export default App
