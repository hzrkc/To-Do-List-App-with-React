import React, { useState } from 'react';
import '../styles/TodoItem.css';

const TodoItem = ({ text, completed, onDelete }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isChecked, setIsChecked] = useState(completed); // Yeni state değişkeni

  const handleDelete = () => {
    onDelete();
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // checked özelliği burada tersine çevriliyor
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
          checked={isChecked} // checked özelliği burada state'e bağlandı
          onChange={handleCheckboxChange} // onChange event'i buraya taşındı
        />
        <span style={{ marginLeft: '10px' }}>{text}</span> {/* aralarındaki boşluk küçültüldü */}
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
