import { Link } from 'react-router-dom';

const PostCard = ({ post, isFavorite, onToggleFavorite }) => {
  
  // ১. কার্ড কন্টেইনার স্টাইল
  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '16px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    border: '1px solid #f1f5f9',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    transition: 'transform 0.2s ease-in-out',
    height: '100%',
    textAlign: 'left'
  };

  const titleStyle = {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: '0',
    textTransform: 'capitalize',
    lineHeight: '1.4'
  };

  const bodyStyle = {
    fontSize: '0.95rem',
    color: '#64748b',
    lineHeight: '1.6',
    margin: '0'
  };

  const actionsStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: 'auto',
    paddingTop: '15px'
  };

  // ২. বাটন স্টাইল ফাংশন
  const getButtonStyle = (isPrimary) => ({
    padding: '10px 16px',
    borderRadius: '10px',
    border: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: '0.3s',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: isPrimary ? '#6366f1' : '#f1f5f9',
    color: isPrimary ? '#ffffff' : '#64748b',
    flex: 1,
    justifyContent: 'center'
  });

  return (
    <div style={cardStyle}>
      <h3 style={titleStyle}>{post.title}</h3>
      <p style={bodyStyle}>
        {post.body.length > 100 ? `${post.body.substring(0, 100)}...` : post.body}
      </p>
      
      <div style={actionsStyle}>
        <Link to={`/posts/${post.id}`} style={{ flex: 1, textDecoration: 'none' }}>
          <button style={getButtonStyle(true)}>
            <span>📖</span> Read More
          </button>
        </Link>
        
        <button 
          style={getButtonStyle(false)}
          onClick={() => onToggleFavorite(post.id)}
        >
          {isFavorite ? '❤️' : '🤍'} {isFavorite ? 'Saved' : 'Favorite'}
        </button>
      </div>
    </div>
  );
};

export default PostCard;