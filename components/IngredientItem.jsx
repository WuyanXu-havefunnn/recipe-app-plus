import styled from 'styled-components'
import { QUERIES } from '../lib/constants'

export default function IngredientItem({ name, measurement }) {
  return (
    <Wrapper>
      <Item>{name}:</Item>
      <Item>{measurement}</Item>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  gap: 10px;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 0px;
    gap: 10px;
  }
`

const Item = styled.h4`
  font-family: 'Gotu', sans-serif;
  font-size: 1rem;
`
