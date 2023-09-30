// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import ForumView from './Components/ForumView';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view" element={<ForumView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

