import { useState } from 'react';

const SearchBar = ({ onSearch, placeholder = "Search posts or tasks..." }) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  // ১. কন্টেইনার স্টাইল
  const containerStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '0 15px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center'
  };

  // ২. ইনপুট ফিল্ড স্টাইল
  const inputStyle = {
    width: '100%',
    padding: '14px 20px 14px 45px',
    borderRadius: '12px',
    border: `2px solid ${isFocused ? '#6366f1' : '#e2e8f0'}`,
    outline: 'none',
    fontSize: '1rem',
    color: '#1e293b',
    backgroundColor: '#ffffff',
    boxShadow: isFocused ? '0 0 0 4px rgba(99, 102, 241, 0.1)' : '0 4px 10px rgba(0, 0, 0, 0.03)',
    transition: 'all 0.3s ease',
    fontFamily: 'inherit'
  };

  // ৩. সার্চ আইকন স্টাইল (Magnifying Glass Emoji)
  const iconStyle = {
    position: 'absolute',
    left: '30px',
    fontSize: '1.2rem',
    color: '#94a3b8',
    pointerEvents: 'none'
  };

  return (
    <div style={containerStyle}>
      <span style={iconStyle}>🔍</span>
      <input
        type="text"
        style={inputStyle}
        placeholder={placeholder}
        value={query}
        onChange={handleSearch}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default SearchBar;