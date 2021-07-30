import styled from 'styled-components'
import { QUERIES } from '../lib/constants'

export default function SingleRecipePrepInfo({
  serves,
  prepTime,
  cookTime,
  totalTime,
}) {
  return (
    <Wrapper>
      <InfoWrapper>
        <InfoName>serves</InfoName>
        <InfoNum>{serves}</InfoNum>
      </InfoWrapper>

      <InfoWrapper>
        <InfoName>prep time</InfoName>
        <InfoNum>{prepTime}</InfoNum>
      </InfoWrapper>

      <InfoWrapper>
        <InfoName>cook time</InfoName>
        <InfoNum>{cookTime}</InfoNum>
      </InfoWrapper>

      <InfoWrapper>
        <InfoName>total time</InfoName>
        <InfoNum>{totalTime}</InfoNum>
      </InfoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px 20px;
  border: 2px solid #abd2fa;
  padding: 20px 30px;
  margin: 50px 0;
  flex-wrap: wrap;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 20px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    grid-template-columns: 1fr 1fr;
    padding: 20px;
    margin: 50px 20px;
  }
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

const InfoName = styled.li`
  font-family: 'Gotu', sans-serif;
  font-size: ${15 / 16}rem;
  text-transform: uppercase;
  list-style-type: none;
  text-align: center;
`

const InfoNum = styled.li`
  font-family: 'Gotu', sans-serif;
  color: #6c6d6e;
  font-size: 1rem;
  text-align: center;
  list-style-type: none;
`
