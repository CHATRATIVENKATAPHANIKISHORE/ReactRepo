import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import './UserForm.css'
function UserForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    uid : null,
    username: '',
    email: '',
    contactNumber: '',
    gender: '',
    address: '',
    pincode: ''
  });
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
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
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/api/all');
        setUsers(response.data);
        console.log("users",users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/api/delete/${userId}`);
      // After deletion, update the user list
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleEdit = () => {
    navigate("/form");
  };

  


  return (
    <div>
     
        {/*  <form onSubmit={handleSubmit}> Your form inputs </form> */ }
        
      <table style ={{ borderCollapse:'collapse', width:'100%' }}>
        <thead>
          <tr >
            <th >Username</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Pincode</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.uid}>
              <td>{user.userName}</td>
              <td>{user.email}</td>
              <td>{user.contactnumber}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
              <td>{user.pincode}</td>
              <td>
              <Link onClick={handleEdit} > Edit</Link>
                <button onClick={() => handleDelete(user.uid)}>Delete</button>
              
                {/* Add edit button and functionality  handleEdit(user.uid,user.username,user.email,
    user.contactNumber, user.gender,user.address, user.pincode)
                           
*/}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserForm;

