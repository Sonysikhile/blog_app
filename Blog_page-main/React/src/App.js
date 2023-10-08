import Navbar from './Navbar.js';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound.js';
import Login from './Login.js';
import Signup from "./Signup.js"
//import {BrowserRouter as Route, Router,Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
    //const person={name:'priya',age:50};
  return (
    <Router>
      <div className="App">
      <div className='content'>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/create" element={<Create/>}/>
          <Route path="/blogs/:id" element={<BlogDetails/>}/>
          <Route path="*" element={<NotFound/>}/>
         </Routes>
      </div>
      </div>
    </Router>
    
  );
}

export default App;
