import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  padding: 1.5rem 3.7rem 1.5rem 3rem;
  font-family: Lato, sans-serif;
  font-weight: 700;
  font-size: 4rem;
  font-style: italic;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  border: none;
  border-radius: 2.5rem;
  color: #ffffff;
  cursor: pointer;
  box-shadow: ${ props => props.withShadow ? '.5rem 1rem #656565' : 'none' };
  background-color: #ff5010;
`;

const Button = ({text, withShadow}) => (
  <StyledButton withShadow={withShadow}>
    {text}
  </StyledButton>
);

export default Button;