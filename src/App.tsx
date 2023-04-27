import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Login } from './pages/Login';
import { Main } from './pages/main/Main';
import { CreatePost } from './pages/create-post/CreatePost';

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/createpost" element={<CreatePost />} />
            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
