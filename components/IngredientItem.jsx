import styled from 'styled-components'

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
  padding: 0 30px;
`

const Item = styled.h4`
  font-family: 'Gotu', sans-serif;
  font-size: 1rem;
`
