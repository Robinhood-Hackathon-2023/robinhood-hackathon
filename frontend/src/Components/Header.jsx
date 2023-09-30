import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import logo from '../mindLogo.png';

const headerStyle = {
  backgroundColor: '#fff',
  padding: '0px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '2px solid #000',
};

const Title = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding-left: 10px;
  font-size: 48px;
  font-weight: bold;
  font-family: 'Pacifico', cursive;
  margin-top: 20px;
`;

const navContainerStyle = {
  display: 'flex',
  alignItems: 'center',
};

const LoginButton = styled(Link)`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 15px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  min-width: 90px;  /* Set a min-width property */
  text-align: center;  /* Ensure text is centered */
`;

const RegisterButton = styled(Link)`
  background-color: #28a745;
  color: #fff;
  padding: 10px 20px;
  border-radius: 15px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  margin-left: 20px;
  min-width: 90px;  /* Set a min-width property */
  text-align: center;  /* Ensure text is centered */
`;


const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #ddd;  /* Adjusted border color to light grey */
  border-radius: 50px;
  padding: 10px 10px;  /* Adjusted padding to increase height */
  margin-right: 975px;
  
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding-left: 5px;
  padding-top: 5px;  /* Added padding-top and padding-bottom to increase height */
  padding-bottom: 5px;  /* Added padding-top and padding-bottom to increase height */
  ::placeholder {
    color: gray;
  }
`;

const ButtonContainer = styled.div`
  margin-right: 50px;  /* This will push the ButtonContainer to the right */
  display: flex;
`;


function Header() {
  return (
    <header style={headerStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Title to="/">
          <img src={logo} alt="Logo" style={{ height: '100px' }} />
        </Title>
        <SearchContainer>
          <FaSearch />
          <SearchInput placeholder="Search" />
        </SearchContainer>
      </div>
      
      <ButtonContainer>
        <LoginButton to="/signin">Log In</LoginButton>
        <RegisterButton to="/register">Register</RegisterButton>
      </ButtonContainer>
    </header>
  );
}

export default Header;


