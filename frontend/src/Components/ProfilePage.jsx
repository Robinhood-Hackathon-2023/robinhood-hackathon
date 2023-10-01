import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background-color: #ffffff;
`;

const FormContainer = styled.div`
  width: 70%;
  background-color: #fff;
  border-radius: 8px;
`;

const StyledH1 = styled.h1`
  font-family: Arial, sans-serif;
  font-size: 26px;
  font-weight: 500;
  color: #222;
  padding: 46px 0 46px 0;
  border-bottom: 1px solid #dfe1e4;
`;

const StyledH4 = styled.h4`
  margin-top: 10px;
  margin-bottom: 0;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #222;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-top: 10px;
`;

const StyledUl = styled.ul`
  margin-top: 10px;
  list-style-type: none;
  padding: 0;
`;

const SaveButton = styled.button`
  width: 50%;
  line-height: 46px;
  font-weight: 700;
  margin-top: 30px;
  padding: 10px 20px;
  border: 1px solid #94969b;
  background-color: #94969b;  /* Grey background */
  color: white;
  font-size: 16px;
  cursor: pointer;
  display: block;  /* Makes the button a block element */
  margin-left: auto;  /* Aligns the button to the center */
  margin-right: auto;
`;


function ProfilePage() {
    const refreshPage = () => {
        window.location.reload();
      }

  return (
    <Container>
      <FormContainer>
        <StyledH1>Edit Profile</StyledH1>  {/* Updated h1 to StyledH1 */}
        <div className='list_wrap'>
          <StyledUl>
            <li className='username'>
              <StyledH4>Username</StyledH4>
              <StyledInput type="text" placeholder="" maxLength="10" />
            </li>
            <li className='current_c' /*company*/>
              <StyledH4>Company</StyledH4>
              <StyledInput type="text" placeholder="" maxLength="10" />
            </li>
            <li className='current_p' /*position*/>
              <StyledH4>Position</StyledH4>
              <StyledInput type="text" placeholder="" maxLength="10" />
            </li>
            <li className='location'>
              <StyledH4>Location</StyledH4>
              <StyledInput type="text" placeholder="" maxLength="10" />
            </li>
            <li className='bio'>
              <StyledH4>Bio</StyledH4>
              <StyledInput type="text" placeholder="" maxLength="10" />
            </li>

          </StyledUl>
        </div>
        <SaveButton onClick={refreshPage}>Save</SaveButton>
      </FormContainer>
    </Container>
  );
}

export default ProfilePage;
