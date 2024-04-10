import logo from './logo.svg';
import './App.css';
import Form from './Component/Form'
import Header from './Component/Header';
import UserDetails from './Component/UserDetails';
import { BrowserRouter, Routes, Route, Link, } from "react-router-dom";


function App() {
  return (
    <div  className='App' >
      <BrowserRouter>
      <Routes>
      <Route exact path = "/" element={<UserDetails/>} />
      <Route exact path = "/form" element={<Form/>} />
      </Routes>
      
      </BrowserRouter>

</div>
  );
}

export default App;
