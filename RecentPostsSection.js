import React, { useState, useEffect } from 'react';

const RecentPostsSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/blogs')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching blog posts:', error));
  }, []);

  const styles = {
    container: {
      width: '90%',
      maxWidth: '1200px',
      margin: '50px auto',
      textAlign: 'center',
      fontFamily: "'Arial', sans-serif",
    },
    heading: {
      fontSize: '28px',
      color: '#333',
      marginBottom: '30px',
    },
    postList: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '20px',
    },
    postCard: {
      padding: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '10px',
      boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease',
    },
    postCardHover: {
      transform: 'scale(1.05)',
    },
    postTitle: {
      fontSize: '20px',
      color: '#fea034',
      marginBottom: '10px',
      fontWeight: 'bold',
    },
    postSummary: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '15px',
    },
    readMore: {
      textDecoration: 'none',
      fontSize: '14px',
      color: '#007bff',
      fontWeight: 'bold',
      transition: 'color 0.3s ease',
    },
    readMoreHover: {
      color: '#0056b3',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Recent Blog Posts</h2>
      <div style={styles.postList}>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post.id}
              style={styles.postCard}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = 'scale(1.05)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = 'scale(1)')
              }
            >
              <h3 style={styles.postTitle}>{post.title}</h3>
              <p style={styles.postSummary}>{post.summary}</p>
              <a
                href={`/blog/${post.id}`}
                style={styles.readMore}
                onMouseEnter={(e) => (e.target.style.color = '#0056b3')}
                onMouseLeave={(e) => (e.target.style.color = '#007bff')}
              >
                Read More
              </a>
            </div>
          ))
        ) : (
          <p>No recent posts available.</p>
        )}
      </div>
    </div>
  );
};

export default RecentPostsSection;
