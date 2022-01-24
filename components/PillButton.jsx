import styled from 'styled-components'
import React, { useState } from 'react'

export default function PillButton({ color, name, onClick, isSelected }) {
  return (
    <Button colorScheme={color} onClick={onClick} isSelected={isSelected}>
      {name}
    </Button>
  )
}

const Button = styled.button`
  font-family: 'Karla', sans-serif;
  border: none;
  font-size: 0.8rem;
  font-weight: 600;
  width: auto;
  height: auto;
  padding: 7px;
  border-radius: 3px;
  text-align: centers;
  color: ${({ colorScheme }) => colorScheme.text};
  background-color: ${({ colorScheme }) => colorScheme.bg};
  line-height: 1.5;
  &:hover {
    cursor: pointer;
    filter: brightness(105%);
    transition: 100ms ease-out;
  }
  border: ${({ isSelected }) => (isSelected ? `2px dotted violet` : `none`)};
`
