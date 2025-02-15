import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
        <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? 'completed' : 'incompleted'}`}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => {deleteTodo(task.id)}}/>
            <FontAwesomeIcon icon={faListCheck} onClick={() => {toggleComplete(task.id)}}/>
        </div>
    </div>
  )
}
