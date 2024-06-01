import React, {useState} from 'react'
import { TodoForm } from './TodoForm'
import {Todo} from './Todo'
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([])
    const addTodo = async (todo) => {
        setTodos((prevTodos) => [...prevTodos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
    }
    const toggleComplete = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            if(todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo
        }))
    }
    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }
    const editTodo = (id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
        }))
    }
    const editTask = (task, id) => {
        setTodos((prevTodos) => prevTodos.map((todo) => {
            return todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo
        }))
    }
  return (
    <div className='TodoWrapper'>
        <h1>Get Things Done!</h1>
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) => (
            todo.isEditing ? 
            <EditTodoForm editTodo={editTask} task={todo}/> :
            <Todo task={todo} key={index}
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo}
            editTodo={editTodo}/>
        ))}
    </div>
  )
}
