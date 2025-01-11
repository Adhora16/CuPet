import React, { useState } from 'react';

const PostBlogSection = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [summary, setSummary] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlogPost = {
      title,
      content,
      summary,
    };

    fetch('http://localhost:5000/api/blogs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBlogPost),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('New post added:', data);
        setTitle('');
        setContent('');
        setSummary('');
      })
      .catch((error) => console.error('Error adding new blog post:', error));
  };

  const styles = {
    container: {
      maxWidth: '700px',
      margin: '50px auto',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      fontFamily: "'Arial', sans-serif",
      textAlign: 'center',
    },
    heading: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#fea034',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    inputBox: {
      textAlign: 'left',
    },
    label: {
      fontSize: '16px',
      color: '#555',
      marginBottom: '5px',
      fontWeight: '600',
    },
    input: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      backgroundColor: '#f9f9f9',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#fea034',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ddd',
      backgroundColor: '#f9f9f9',
      resize: 'vertical',
      transition: 'border-color 0.3s',
    },
    button: {
      padding: '10px 20px',
      fontSize: '16px',
      backgroundColor: '#fea034',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'all 0.3s',
    },
    buttonHover: {
      backgroundColor: '#ff9317',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Post a New Article or a Success Story</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputBox}>
          <label style={styles.label}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputBox}>
          <label style={styles.label}>Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            required
            style={styles.textarea}
          />
        </div>
        <div style={styles.inputBox}>
          <label style={styles.label}>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={styles.textarea}
          />
        </div>
        <button type="submit" style={styles.button}>
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default PostBlogSection;
