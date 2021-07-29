import styled from 'styled-components'
import { QUERIES } from '../lib/constants'

const infoName = ['serves', 'prep time', 'cook time', 'total time']

export default function SingleRecipePrepInfo({
  serves,
  prepTime,
  cookTime,
  totalTime,
}) {
  return (
    <Wrapper>
      <InfoHeadingGroup>
        {infoName.map((name) => (
          <InfoItem>{name}</InfoItem>
        ))}
      </InfoHeadingGroup>

      <InfoData>
        <InfoNum>{serves}</InfoNum>
        <InfoNum>{prepTime}</InfoNum>
        <InfoNum>{cookTime}</InfoNum>
        <InfoNum>{totalTime}</InfoNum>
      </InfoData>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* margin: 80px 300px; */
  border: 1px solid red;
  padding: 25px;
  margin-bottom: 30px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 20px;
    font-size: 1rem;
    margin: 80px 200px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 20px;
    margin: 80px 20px;
  }
`

const InfoHeadingGroup = styled.div`
  display: flex;
  gap: 50px;
`

const InfoItem = styled.li`
  font-family: 'Gotu', sans-serif;
  font-size: ${18 / 16}rem;
  text-transform: uppercase;
  list-style-type: none;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1rem;
  }
`

const InfoData = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  list-style-type: none;
`

const InfoNum = styled.li`
  font-family: 'Gotu', sans-serif;
  font-size: 1rem;
  list-style-type: none;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: 1rem;
  }
`
