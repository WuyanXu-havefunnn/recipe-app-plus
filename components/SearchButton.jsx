import styled from 'styled-components'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function SearchButton() {
  return (
    <SearchBtn>
      <FontAwesomeIcon icon={faSearch} />
    </SearchBtn>
  )
}

const SearchBtn = styled.button`
  background-color: #f5f5f5;
  color: #7fe206;
  border: none;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
    transition: 100ms ease-out;
  }
`
