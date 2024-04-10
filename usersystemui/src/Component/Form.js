import React from 'react';
import { useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './Header.css';
import FormDetails from './FormDetails';
import Header  from './Header';


const Form = () =>{
    
    return(
        <div>
        <div class="col-8 my-auto">
            <Header/>    
             </div>

        <div style ={{ border:'2px solid black', padding:'50px', display:'inline-block' }}class="col-8 my-auto">
            <h3 style ={{marginLeft:'20px'}}> User Registration </h3>   
            <FormDetails/>     
             </div>
             </div>
    )
}
export default Form;
