import React from 'react'
import './App.sass'
import Todo from './components/Todo'

function App() {
  return (
    <div className="App" data-testid='app'>
      <Todo name='Take out the trash' />
    </div>
  );
}

export default App
