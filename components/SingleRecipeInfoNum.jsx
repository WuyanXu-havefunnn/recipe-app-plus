import styled from 'styled-components'

export default function SingleRecipeInfoNum({
  serves,
  prepTime,
  cookTime,
  totalTime,
}) {
  return (
    <Wrapper>
      <InfoItem>{serves}</InfoItem>
      <InfoItem>{prepTime}</InfoItem>
      <InfoItem>{cookTime}</InfoItem>
      <InfoItem>{totalTime}</InfoItem>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 300px;
  gap: 100px;
  list-style-type: none;
`

const InfoItem = styled.li`
  font-family: 'Gotu', sans-serif;
  font-size: 1rem;
  list-style-type: none;
`
