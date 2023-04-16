import React, { useState } from 'react';

const TodoItem = ({ text, completed, onDelete }) => {
  const [isClicked, setIsClicked] = useState(false); // yeni state değişkeni

  const handleDelete = () => {
    onDelete();
  };

  const handleClick = () => {
    setIsClicked(!isClicked); // tıklama işlemiyle isClicked değeri tersine çevrilir
  };

  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        maxWidth: '700px', // 700px olarak sınırlandırıldı.
        marginBottom: '10px', // Her öğeden sonra 10px boşluk bırakıldı
        textDecoration: isClicked ? 'line-through' : 'none' // text üstünün çizilmesi durumunda text-decoration özelliği line-through olarak ayarlanır
      }}
      onClick={handleClick} // tıklama işlemi burada uygulanır
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input type="checkbox" checked={completed} style={{ marginRight: '5px' }} /> {/* checkbox kutucuğu buraya taşındı ve metinden önce yerleştirildi */}
        <span>{text}</span> {/* span elementi input kutucuğunun yanına taşındı ve aralarında boşluk bırakıldı */}
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
