import React from 'react'
import './styles/App.sass'
import Todo from './components/Todo'

function App() {
  return (
    <div className="App" data-testid='app'>
      <Todo name='Trash' description='Take out the trash tonight' isCompleted={true} />
    </div>
  );
}

export default App
