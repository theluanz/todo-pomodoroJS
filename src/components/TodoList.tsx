import React, { useState } from 'react'
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import styles from '../styles/components/TodoList.module.css'

interface TodoItem{
  id:number
  value:string 
}

let count = 1

export function TodoList(){
  const [listTodo, setListTodo] = useState<TodoItem[]>([{ id: 0, value: '' }])
  const [list, setList] = useState<TodoItem[]>([{ id: 0, value: '' }])

  const changeTodo = (value: string, id: TodoItem['id']) => {
     //isso modifica o item
     //ele passa item por item até encontrar o id com id que queremos modificar, caso encontre id diferente, ele mantem o mesmo item
     //isso pq é uma lista estatica
    setListTodo(previous => previous.map(item => item.id === id ? { ...item, value } : item))
  }

  const deletTodo = (id: TodoItem['id']) => {
    //isso deleta o Todo com o item correto
    setListTodo(previous => previous.filter(item => item.id !== id))
  }

  const addTodo = (index: number) => {
    const newItem = { id: count++, value: '' }
    //adiciona ao todo ao final da lista
    setListTodo(previous => [...previous, newItem])
  }

  return(
    <div className={styles.TodoListContainer}>
      {listTodo.map((item, index) => (
        <div key={item.id}>
          <input
            value={item.value}
            onChange={e => changeTodo(e.currentTarget.value, item.id)}
          />
          <IconButton onClick={() => addTodo(index)}>
            <AddIcon />
          </IconButton>
            <IconButton onClick={() => deletTodo(item.id)}>
              <DeleteIcon />
            </IconButton>

        </div>
      ))}
    </div>
  )
}