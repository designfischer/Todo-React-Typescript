import React, { useEffect, useState } from 'react';
import './styles.css'
import TodoItem from './components/todo'
import data from './data/data'

export const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todos[]>([])

  useEffect(() => {
    setTimeout(function loadData() {
      setTodos(data)      
    }, 2000)
  }, [])

  function addTodo(e: React.FormEvent) {
    e.preventDefault()
    setTodos(previousTodos => [...previousTodos, {
      description: todo,      
      index: Date.now()
    }])    
    setTodo('')
  }

  function removeTodo(id: number) {    
    setTodos(todos.filter(todo => todo.index !== id))
  }
  
  return (
    <div className='container'>
      <section>
        <form>
          <input 
            type='text'
            onChange={e => setTodo(e.target.value)}
            value={todo}
          />
          <button className='add-btn' onClick={addTodo}> Adicionar</button>
        </form>        
        <ul>          
          {todos.map(todo => (
            <TodoItem
              key={todo.index}
              index={todo.index}
              description={todo.description}              
              removeTodo={removeTodo}              
            />
          ))}          
        </ul>
      </section>      
    </div>
  );
}

export default App;
