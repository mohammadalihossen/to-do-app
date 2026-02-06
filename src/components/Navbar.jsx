import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // ১. মেইন কন্টেইনার স্টাইল (গ্লাস-মরফিজম লুক)
  const navContainerStyle = {
    position: 'fixed',
    top: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 1000,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    padding: '8px 12px',
    borderRadius: '50px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    width: 'fit-content'
  };

  const ulStyle = {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '8px'
  };

  // ২. ডায়নামিক বাটন স্টাইল ফাংশন
  const getLinkStyle = (path) => {
    const isActive = location.pathname === path;
    return {
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 20px',
      borderRadius: '40px',
      fontSize: '15px',
      fontWeight: '600',
      transition: 'all 0.3s ease',
      backgroundColor: isActive ? '#6366f1' : 'transparent',
      color: isActive ? '#ffffff' : '#64748b',
      boxShadow: isActive ? '0 4px 15px rgba(99, 102, 241, 0.3)' : 'none'
    };
  };

  const menuItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/todos', label: 'Todos', icon: '📝' },
    { path: '/posts', label: 'Posts', icon: '📰' }
  ];

  return (
    <nav style={navContainerStyle}>
      <ul style={ulStyle}>
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path} style={getLinkStyle(item.path)}>
              <span>{item.icon}</span>
              <span style={{ fontSize: '14px' }}>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;