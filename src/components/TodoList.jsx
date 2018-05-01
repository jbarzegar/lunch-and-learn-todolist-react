import React, { Component, Fragment } from 'react'
import autobind from 'react-autobind'

import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }

    autobind(this)
  }
  componentDidMount() {
    this.addTodo('First todo')
  }
  /* A HOF that will pass params into a function, that was provided as an arg */
  handleClick(fn, ...params) {
    return e => fn(...params)
  }
  addTodo(todoName) {
    const newTodoItem = {
      name: todoName,
      id: this.state.todos.length,
      isCompleted: false
    }
    const newTodoState = [...this.state.todos, newTodoItem]

    return this.setState({ todos: newTodoState })
  }
  deleteTodo(todoId) {
    const updatedArray = this.state.todos.filter(todo => todo.id !== todoId)

    this.setState({ todos: updatedArray })
  }
  toggleTodo(todoId) {
    const todoItemIndex = this.state.todos.findIndex(todo => todo.id === todoId)

    const todoItem = this.state.todos[todoItemIndex]

    const updatedArray = Object.assign([...this.state.todos], {
      [todoItemIndex]: { ...todoItem, isCompleted: !todoItem.isCompleted }
    })

    this.setState({ todos: updatedArray })
  }
  render() {
    return (
      <Fragment>
        <TodoForm addTodo={this.addTodo} />
        <h1>List of todos</h1>
        {this.state.todos.length === 0 ? (
          <h2>You have no todos</h2>
        ) : (
          this.state.todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={this.handleClick(this.deleteTodo, todo.id)}
              toggleTodo={this.handleClick(this.toggleTodo, todo.id)}
            />
          ))
        )}
      </Fragment>
    )
  }
}

export default TodoList
