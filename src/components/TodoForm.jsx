import React, { Component } from 'react'
import PropTypes from 'prop-types'

import autobind from 'react-autobind'

class TodoForm extends Component {
  static propTypes = {
    addTodo: PropTypes.func
  }
  constructor(props) {
    super(props)

    this.state = {
      todoValue: ''
    }

    autobind(this)
  }
  handleInputChange({ target }) {
    const todoValue = target.value

    this.setState({ todoValue })
  }
  handleSubmit(e) {
    e.preventDefault()

    const todo = this.state.todoValue

    this.props.addTodo(todo)

    this.setState({ todoValue: '' })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={this.state.todoValue}
          onChange={this.handleInputChange}
        />
        <button type="submit">Add item</button>
      </form>
    )
  }
}

export default TodoForm
