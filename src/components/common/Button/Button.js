import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  padding: 1.5rem 3.7rem 1.5rem 3rem;
  width: ${ props => props.small ? 'min-content' : 'auto' };
  font-family: Lato, sans-serif;
  font-weight: 700;
  font-size: 4rem;
  font-style: italic;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  border: none;
  border-radius: 1.5rem;
  color: #ffffff;
  cursor: pointer;
  box-shadow: .5rem 1rem #656565;
  background: linear-gradient(to right, #FF4E10, #FF762A);
`;

const Button = ({ text, small}) => (
  <StyledButton small={small}>
    {text}
  </StyledButton>
);

export default Button;