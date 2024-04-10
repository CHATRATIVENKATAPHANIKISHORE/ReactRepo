import React from 'react';
import { useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './Header.css';
import UserForm from './UserForm';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Header';
const UserDetails = (props) =>{
    
    

    return(
        <div style ={{ border:'2px solid black', padding:'10px', display:'inline-block' }}>
        <div style ={{ border:'2px solid black', padding:'5px', display:'inline-block' }}>
            <Header/>
            </div>
            <div >
            <h4 > User Details </h4>  
            <Link to='/form'>Add User </Link>
            </div>
            <div >
            <UserForm/>
            
        </div>
        </div>
    );


}
export default UserDetails;
