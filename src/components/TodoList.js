import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  state = {
    items: [
      { id: 1, text: 'Test girdisi 1', completed: false },
      { id: 2, text: 'Araba yıkanacak', completed: false },
      { id: 3, text: 'Marketten haftalık alışveriş yapılacak', completed: false },
    ],
    newItemText: '',
  };

  handleNewItemChange = (event) => {
    this.setState({ newItemText: event.target.value });
  };

  handleNewItemSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      text: this.state.newItemText,
      completed: false,
    };
    this.setState({
      items: [...this.state.items, newItem],
      newItemText: '',
    });
  };

  render() {
    return (
      <div>
        <h1>To-Do List</h1>
        <form onSubmit={this.handleNewItemSubmit}>
          <input
            type="text"
            value={this.state.newItemText}
            onChange={this.handleNewItemChange}
          />
          <button type="submit">Add</button>
        </form>
        {this.state.items.map((item) => (
          <TodoItem key={item.id} text={item.text} completed={item.completed} />
        ))}
      </div>
    );
  }
}

export default TodoList;
