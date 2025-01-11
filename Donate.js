import React, { useState } from 'react';

const Donate = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !amount || !paymentMethod) {
      setError('Please fill in all required fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/donate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, amount, paymentMethod }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(result.message);
        setError('');
      } else {
        setSuccess('');
        setError(result.message);
      }
    } catch (err) {
      console.error("Error:", err); // Log the error
      setError('Something went wrong. Please try again later.');
      setSuccess('');
    }
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '50px auto',
      padding: '30px',
      borderRadius: '10px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
      textAlign: 'center',
      fontFamily: "'Arial', sans-serif",
    },
    heading: {
      fontSize: '24px',
      color: '#fea034',
      fontWeight: 'bold',
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
      display: 'block',
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
    success: {
      color: 'green',
      fontSize: '14px',
      marginBottom: '10px',
    },
    error: {
      color: 'red',
      fontSize: '14px',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Donate to CuPet</h2>
      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}
      <form style={styles.form} onSubmit={handleSubmit}>
        <div style={styles.inputBox}>
          <label style={styles.label}>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputBox}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputBox}>
          <label style={styles.label}>Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputBox}>
          <label style={styles.label}>Payment Method:</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
            style={styles.input}
          >
            <option value="">Select Payment Method</option>
            <option value="Cash">Cash</option>
            <option value="Bank">Bank</option>
            <option value="Cheque">Cheque</option>
          </select>
        </div>
        <button type="submit" style={styles.button}>
          Donate
        </button>
      </form>
    </div>
  );
};

export default Donate;
