import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function FormDetails() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    contactNumber: '',
    gender: '',
    address: '',
    pincode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/users', formData);
      console.log('User created:', response.data);
      // Optionally, reset the form
      setFormData({
        username: '',
        email: '',
        contactNumber: '',
        gender: '',
        address: '',
        pincode: ''
      });
    } catch (error) {
      console.error('Error creating user:', error);
    }
    navigate("/");
  };

  return (
    <form style ={{ border:'2px solid black', padding:'60px', display:'inline-block' }}onSubmit={handleSubmit}>
      <div  style ={{ display : 'flex'}}>
      <div style ={{ flex : '2',marginRight:'5px'}}>
      <label>
        Username:
        <input type="text" name="username" placeholder='Enter Username(alphanumeric)' pattern='[A-Za-z0-9]*' value={formData.username}   
        onChange={handleChange} />
      </label><br />
      <label>
        Email:
        <input type="email" name="email" placeholder='Enter valid Email'  value={formData.email} onChange={handleChange} />
      </label><br />
      <label>
        Contact Number:
        <input type="text" name="contactNumber"  placeholder='Enter 10 digit number only' pattern='[0-9]*'minLength = {10} maxLength={10} value={formData.contactNumber} onChange={handleChange} />
      </label><br />
      </div>
      <div style ={{ flex : '2',marginLeft:'5px'}}>
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label><br />
      <label>
        Address:
        <input type="text" name="address" placeholder='Enter Address' value={formData.address} onChange={handleChange} />
      </label><br />
      <label>
        Pincode:
        <input type="text" name="pincode" placeholder='Enter 6 digit number only' pattern='[0-9]*'minLength = {6}value={formData.pincode} onChange={handleChange} />
      </label><br />
      </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormDetails;
