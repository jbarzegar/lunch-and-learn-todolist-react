import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 10px auto;
  max-width: 220px;
`

const TodoTitle = styled.h3`
  font-size: 25px;

  ${props =>
    props.isCompleted
      ? {
          color: 'green',
          textDecoration: 'line-through'
        }
      : { color: 'blue' }};
`

const DeleteButton = styled.span`
  cursor: pointer;
  color: red;
  transition: color ease 0.3s;

  &:hover {
    color: orange;
  }
`

const TodoItem = ({ todo, deleteTodo, toggleTodo, ...props }) => (
  <TodoItemContainer>
    <input type="checkbox" name="toggle complete" onChange={toggleTodo} />
    <TodoTitle isCompleted={todo.isCompleted}>{todo.name}</TodoTitle>
    <DeleteButton onClick={deleteTodo}>delete</DeleteButton>
  </TodoItemContainer>
)

TodoItem.propTypes = {
  todo: PropTypes.object,
  deleteTodo: PropTypes.func,
  toggleTodo: PropTypes.func
}

export default TodoItem
