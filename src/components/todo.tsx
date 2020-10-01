import React from 'react'

const Todo: React.FC<Todo> = ({ index, description, removeTodo }) => {
    return (
        <li>
            <span>{ description }</span>                       
            <button 
                className='remove-btn' 
                onClick={()=>{removeTodo(index)}}
            >Remover</button>
        </li>
    )
}

export default Todo