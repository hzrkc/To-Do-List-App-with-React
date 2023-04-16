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
  
    handleDeleteItem = (itemId) => {
      const updatedItems = this.state.items.filter(item => item.id !== itemId);
      this.setState({ items: updatedItems });
    };
  
    handleToggleComplete = (itemId) => {
      const updatedItems = this.state.items.map(item => {
        if (item.id === itemId) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
      this.setState({ items: updatedItems });
    };
  
    render() {
      return (
        <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '700px' }}>
            <h1>To-Do List App by Hazar</h1>
            <form onSubmit={this.handleNewItemSubmit}>
              <input
                type="text"
                value={this.state.newItemText}
                onChange={this.handleNewItemChange}
              />
              <button type="submit">Add</button>
            </form>
            <div style={{ marginTop: '10px' }}> {/* Input ve listeleme arasında 10px'lik boşluk */}
              {this.state.items.map((item) => (
                <TodoItem 
                  key={item.id} 
                  text={item.text} 
                  completed={item.completed} 
                  onDelete={() => this.handleDeleteItem(item.id)}
                  onToggleComplete={() => this.handleToggleComplete(item.id)}
                />
              ))}
            </div>
          </div>
        </div>
      );
    }
  }  

export default TodoList;
