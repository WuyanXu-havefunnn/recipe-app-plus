import styled from 'styled-components'
import React, { useState } from 'react'

export default function PillButton({ color, name, onClick, isSelected }) {
  return (
    <Button isSelected={isSelected}>
      <Inner colorScheme={color} onClick={onClick}>
        {name}
      </Inner>
    </Button>
  )
}

const Button = styled.button`
  border: none;
  border-radius: 6px;
  border: ${({ isSelected }) => (isSelected ? `2px dashed violet` : `none`)};
  padding: 3px;
  box-shadow: none;
  background-color: transparent;
`

const Inner = styled.div`
  font-family: 'Karla', sans-serif;
  border: none;
  font-weight: 600;
  width: auto;
  height: auto;
  padding: 7px;
  border-radius: 4px;
  text-align: centers;
  color: ${({ colorScheme }) => colorScheme.text};
  background-color: ${({ colorScheme }) => colorScheme.bg};
  line-height: 1.5;
  &:hover {
    cursor: pointer;
    filter: brightness(105%);
    transition: 100ms ease-out;
  }
`
