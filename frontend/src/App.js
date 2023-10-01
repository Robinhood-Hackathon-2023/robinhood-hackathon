// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import SignIn from './Components/SignIn';
import Register from './Components/Register';
import ForumView from './Components/ForumView';
import SideMenu from './Components/SideMenu';

function App() {
  return (
    <Router>
      <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', zIndex: '100' }}>
        <Header />
      </div>
      {/* Sidebar */}
      <div style={{ position: 'fixed', top: '145px', left: '0', width: '200px', zIndex: '100' }}>
        <SideMenu />
      </div>
      <div style={{ marginLeft: '200px', paddingTop: '150px', paddingLeft: '50px', width: 'calc(100% - 200px)', boxSizing: 'border-box' }}>
        <Routes>
          <Route path="/" exact element={<ForumView />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/view" element={<ForumView />} />
        </Routes>
      </div>  
    </Router>
  );
}

export default App;

