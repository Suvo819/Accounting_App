/* eslint-disable no-undef */
import React, { useState } from 'react';
import image from "./Img/imge.jpg";

export default function Dashboard() {
  const [userId, setUserId] = useState('');
  const [transactionNumber, setTransactionNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [labelHover, setLabelHover] = useState(false); // Added labelHover state
  // const [transactionNumberLabelHover, setTransactionNumberLabelHover] = useState(false);
  // const [userIdLabelHover, setUserIdLabelHover] = useState(false);

  const handleOnChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleOnChangeTransactionNumber = (e) => {
    setTransactionNumber(e.target.value);
  };

  const handleOnChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Store the form data
    const userData = userId;
    const transactionData = transactionNumber;
    const amountData = amount;

    // Perform additional actions with the form data
    console.log('User ID:', userData);
    console.log('Transaction Number:', transactionData);
    console.log('Amount:', amountData);

    // Reset the form
    setUserId('');
    setTransactionNumber('');
    setAmount('');
  };

  const cardStyle = {
    margin: 'auto',
    marginTop: '5rem',
    padding: '1.5rem',
    width: '80%',
    maxWidth: '40rem',
    // backgroundColor: '#fff',
    borderRadius: '2.5rem',
    boxShadow: '0px 0px 20px 10px rgba(0, 0, 0, 0.5)',
    webkitBoxReflect: 'below 1px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.5))',
    visibility:'visible',
    
  };

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    borderRadius: '2rem',
    border: '1px solid #ccc',
    marginBottom: '1rem',
    caretColor: 'Brown',
    outline: 'thick ridge pink',
    webkitTransition: 'all .5s ease',
    mozTransition: 'all .5s ease',
    msTransition: 'all .5s ease',
    oTransition: 'all .5s ease',
    transition: 'all .5s ease',
    color: 'black',
  
    // Add hover effect on labels
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
    labelHover: {
      color: 'red', // Change the color on hover
    
  },
  };
  const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    borderRadius: '2rem',
    border: '1px solid grey',
    backgroundColor: '#D3D3D3',
    color: '#fff',
    fontWeight: 'bold',
    cursor: 'pointer',
    textShadow: '2px 2px 4px #000000',
    backgroundImage:"linear-gradient(DarkGoldenRod, BlanchedAlmond)",
    textTransform: 'uppercase',
    color: 'DarkRed',
    fontFamily: 'Verdana, sans-serif',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundImage:`url("https://images.pexels.com/photos/217316/pexels-photo-217316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover',  minHeight: '100vh', opacity:"0.7", padding:'3rem'}}>
      <div style={cardStyle}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="amount" style={{ ...inputStyle.label, ...(labelHover && inputStyle.labelHover) }} onMouseEnter={() => setLabelHover(true)} onMouseLeave={() => setLabelHover(false)}>Amount</label>
            <input
              type="number"
              className="form-control"
              id="amount"
              name="amount"
              value={amount}
              onChange={handleOnChangeAmount}
              placeholder="Amount"
              style={inputStyle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="transactionNumber" style={{ ...inputStyle.label, ...(labelHover && inputStyle.labelHover) }} onMouseEnter={() => setLabelHover(true)} onMouseLeave={() => setLabelHover(false)}><h3>Transaction No.</h3></label>
            <input
              type="text"
              className="form-control"
              id="transactionNumber"
              name="transactionNumber"
              value={transactionNumber}
              onChange={handleOnChangeTransactionNumber}
              placeholder="Transaction No."
              style={inputStyle}
            />
          </div>
          <div className="form-group">
            <label htmlFor="userId" style={{ ...inputStyle.label, ...(labelHover && inputStyle.labelHover) }} onMouseEnter={() => setLabelHover(true)} onMouseLeave={() => setLabelHover(false)}>User Id</label>
            <input
              type="text"
              className="form-control"
              id="userId"
              name="userId"
              value={userId}
              onChange={handleOnChangeUserId}
              placeholder="User Id"
              style={inputStyle}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-warning" style={buttonStyle}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
)}