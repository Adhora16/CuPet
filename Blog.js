import React from 'react';
import RecentPostsSection from './RecentPostsSection';
import PostBlogSection from './PostBlogSection';

const Blog = () => {
  const styles = {
    mainContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '30px',
      maxWidth: '1200px',
      margin: '50px auto',
      gap: '20px',
      fontFamily: "'Arial', sans-serif",
    },
    recentPosts: {
      flex: 2,
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    postBlog: {
      flex: 1,
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    sectionTitle: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '15px',
      color: '#fea034',
    },
    content: {
      fontSize: '16px',
      color: '#555',
      lineHeight: '1.6',
    },
  };

  return (
    <div style={styles.mainContainer}>
      <div style={styles.recentPosts}>
        <h2 style={styles.sectionTitle}>Recent Posts</h2>
        <RecentPostsSection />
      </div>
      <div style={styles.postBlog}>
        <h2 style={styles.sectionTitle}>Post a Blog</h2>
        <PostBlogSection />
      </div>
    </div>
  );
};

export default Blog;
