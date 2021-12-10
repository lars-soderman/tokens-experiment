import React from 'react'
import styled from 'styled-components'
import styles from './data/output.json'

const StButton = styled.button`

`

const Button = () => {
  console.log('styles', styles)
  return (
    <div>
      Hello
    </div>
  )
}

export default Button
