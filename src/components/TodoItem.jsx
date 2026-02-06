import { useState, useEffect } from 'react';

const TodoItem = ({ todo, toggleTodo }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // পেজ লোড হওয়ার সময় ফেভারিট চেক করা
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favoriteTodos')) || [];
    setIsFavorite(favorites.includes(todo.id));
  }, [todo.id]);

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favoriteTodos')) || [];
    let newFavorites;
    
    if (isFavorite) {
      newFavorites = favorites.filter(id => id !== todo.id);
    } else {
      newFavorites = [...favorites, todo.id];
    }
    
    localStorage.setItem('favoriteTodos', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  // ১. কার্ড কন্টেইনার স্টাইল
  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '16px 20px',
    marginBottom: '15px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
    borderLeft: `6px solid ${todo.completed ? '#10b981' : '#f59e0b'}`, // স্ট্যাটাস অনুযায়ী বর্ডার কালার
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    transition: 'all 0.3s ease'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '10px'
  };

  const titleStyle = {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: todo.completed ? '#94a3b8' : '#1e293b',
    textDecoration: todo.completed ? 'line-through' : 'none',
    margin: 0,
    flex: 1,
    textTransform: 'capitalize'
  };

  const statusBadgeStyle = {
    fontSize: '0.75rem',
    fontWeight: '700',
    padding: '4px 10px',
    borderRadius: '20px',
    backgroundColor: todo.completed ? '#dcfce7' : '#fef3c7',
    color: todo.completed ? '#166534' : '#d97706'
  };

  const actionsStyle = {
    display: 'flex',
    gap: '10px'
  };

  // ২. বাটন স্টাইল ফাংশন
  const getButtonStyle = (type) => {
    let bgColor = '#f1f5f9';
    let textColor = '#64748b';

    if (type === 'done') {
      bgColor = todo.completed ? '#f1f5f9' : '#6366f1';
      textColor = todo.completed ? '#64748b' : '#ffffff';
    }

    return {
      padding: '8px 14px',
      borderRadius: '10px',
      border: 'none',
      fontSize: '0.85rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      backgroundColor: bgColor,
      color: textColor,
      transition: '0.2s',
      flex: 1,
      justifyContent: 'center'
    };
  };

  return (
    <div style={cardStyle}>
      <div style={headerStyle}>
        <h3 style={titleStyle}>{todo.title}</h3>
        <span style={statusBadgeStyle}>
          {todo.completed ? 'DONE' : 'PENDING'}
        </span>
      </div>
      
      <div style={actionsStyle}>
        <button 
          style={getButtonStyle('done')}
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.completed ? '↩️ Reset' : '✅ Mark Done'}
        </button>
        
        <button 
          style={getButtonStyle('fav')}
          onClick={handleFavorite}
        >
          {isFavorite ? '❤️' : '🤍'} {isFavorite ? 'Saved' : 'Fav'}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;