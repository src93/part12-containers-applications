import React from 'react'
import Todo from '../Todo/Todo.jsx'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map((todo, index) => {
        return (
          <Todo todo={todo} onClickComplete={onClickComplete} onClickDelete={onClickDelete} key={index} />
        )
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
