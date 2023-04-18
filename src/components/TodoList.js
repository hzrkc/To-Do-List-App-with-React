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

  // setState -> öğelerin eklenmesi, completed olması ve silinmesi için kullanılır.

  handleNewItemChange = (event) => {  // yeni bir öğe eklemek için kullanılan metin giriş kutusunun değişikliklerini izler
    this.setState({ newItemText: event.target.value }); 
  };

  handleNewItemSubmit = (event) => {  // yeni bir öğe eklemek için input gönderilmesi durumunda çağrılır ve yeni bir öğe ekler
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

  handleDeleteItem = (itemId) => {  // listeden bir öğe silmek için "Delete" düğmesine tıklanması durumunda çağrılır
    const itemIndex = this.state.items.findIndex(item => item.id === itemId);
    const updatedItems = [...this.state.items];
    updatedItems.splice(itemIndex, 1);
    this.setState({ items: updatedItems });
  };

  handleToggleComplete = (itemId) => {    // tamamlanmış görevlerin üstünü çizmek için çağırılır
    const updatedItems = this.state.items.map(item => {
      if (item.id === itemId) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    this.setState({ items: updatedItems });
  };

  render() {
    const completedItems = this.state.items.filter(item => item.completed); 
    const completedItemCount = completedItems.length;   // Tamamlanmış to-do sayısını tutar.

    return (
      <div style={{ marginTop: '50px', display: 'flex', justifyContent: 'center',
      backgroundColor:'rgba(128, 128, 128, 0.5)'}}>
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

          <br></br>

          <div style={{ marginTop: '10px' }}>

          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between' }}>
            <span>
              <span className="inline-blocks">
                <p style={{ fontSize: '3em', margin: '0' }}>{this.state.items.length} </p>
                <p style={{ margin: '0' }}> &nbsp;&nbsp;&nbsp;TO-DO</p>
              </span>
              <span className="inline-blocks">
                <p style={{ fontSize: '3em', margin: '0' }}>{completedItemCount} </p>
                <p style={{ margin: '0' }}> &nbsp;&nbsp;&nbsp;Completed</p>
              </span>
            </span>
          </div>


          <br></br>
          <br></br>

            {this.state.items.map((item) => (
              <TodoItem 
                key={item.id} 
                text={item.text} 
                completed={item.completed} 
                onDelete={() => this.handleDeleteItem(item.id)}
                onToggleComplete={() => this.handleToggleComplete(item.id)}
                style={{fontWeight: 'bold'}}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default TodoList;
