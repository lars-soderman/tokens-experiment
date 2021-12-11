import React from 'react'
import styled from 'styled-components'
import tokens from './data/tokens.json'

const StButton = styled.button`
  border-radius: ${tokens.borderRadius.small.value}px;
  min-height: 44px;
  min-width: 200px;
  padding: 10px 40px;
  margin: 80px auto;
  background: green;
  color: white;
  font-weight: 500;
`

const Button = ({...props}) => {
  return (
    <StButton {...props}>
      button text
    </StButton>
  )
}

export default Button
