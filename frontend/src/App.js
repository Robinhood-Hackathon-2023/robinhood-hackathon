// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import ForumView from './Components/ForumView';

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ForumView />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view" element={<ForumView />} />
        </Routes>
    </Router>
  );
}

export default App;

