import styled from 'styled-components'
import React from 'react'
import { recipesData } from '../data/recipesData'

export default function SearchBar() {
  const [value, setValue] = React.useState('')
  return (
    <Wrapper>
      <h1>Find Recipes</h1>
      <p>{value}</p>
      <SearchInput
        value={value}
        onChange={(event) => setValue(event.target.value)}
        type="text"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
`
const SearchInput = styled.input`
  /* width: 150px;
  height: 100px; */
  /* color: #7fe206; */
`
