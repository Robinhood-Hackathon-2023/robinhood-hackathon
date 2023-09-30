import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const handwriting = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const headerStyle = {
  backgroundColor: '#2ecc71',
  padding: '20px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const Title = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding-left: 100px;
  padding-bottom: 100px;
  font-size: 48px;
  font-weight: bold;
  font-family: 'Pacifico', cursive;
  animation: ${fadeIn} 2s ease-in-out;
  overflow: hidden; /* Hide overflow to make the handwriting effect */
  white-space: nowrap; /* Prevent wrapping to maintain the effect */
`;

const navContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const navLinkStyle = {
  color: '#fff',
  textDecoration: 'none',
  margin: '0 15px',
  fontSize: '18px',
  fontWeight: 'bold',
  paddingRight: '100px',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  transition: 'color 0.3s ease-in-out',
};

const HandwritingEffect = styled.div`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: ${handwriting} 2s steps(40, end) forwards;
`;

function Header() {
  return (
    <header style={headerStyle}>
      <div>
        <Title to="/">
          <HandwritingEffect>Mind</HandwritingEffect>
        </Title>
      </div>
      <nav style={navContainerStyle}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
          <li>
            <Link to="/" style={navLinkStyle}>Home</Link>
          </li>
          <li>
            <Link to="/view" style={navLinkStyle}>Posts</Link>
          </li>
          <li>
            <Link to="/signin" style={navLinkStyle}>Sign In</Link>
          </li>
          <li>
            <Link to="/register" style={navLinkStyle}>Register</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
