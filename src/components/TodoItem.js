import React, { useState } from 'react';
import '../styles/TodoItem.css';

const TodoItem = ({ text, completed, onDelete, onToggleComplete }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleDelete = () => {    // Delete butonuna tıklandığında OnDelete fonk. çağırarak öğeyi siler.
    onDelete();
  };

  const handleClick = (e) => {
    // Eğer checkbox veya Delete butonuna tıklandıysa, handleClick fonksiyonunu çağırmaz.
    if (e.target.tagName === "INPUT" || e.target.tagName === "BUTTON") {
      return;
    }
    setIsClicked(!isClicked);
    onToggleComplete(); // Checkbox'ı işaretlemek için onToggleComplete fonksiyonunu çağırır
  };
  

  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        maxWidth: '700px', 
        marginBottom: '10px', 
        textDecoration: isClicked ? 'line-through' : 'none'
      }}
      onClick={handleClick}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          className="custom-checkbox"
          type="checkbox"
          checked={completed}
          onChange={() => onToggleComplete(!completed)} // isClicked durumuna göre metnin üstünü çizer
        />
        <span>{text}</span>
      </div>
      
      <span>
        <button style={{ marginLeft: '200px' }} onClick={handleDelete}>
          Delete
        </button>
      </span>
    </div>
  );
};

export default TodoItem;
