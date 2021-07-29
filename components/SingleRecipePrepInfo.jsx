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
  display: flex;
  justify-content: space-around;
  gap: 20px;
  border: 2px solid #abd2fa;
  padding: 25px 50px;
  margin-bottom: 50px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 20px;
    font-size: 1rem;
    margin-bottom: 50px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 20px;
    margin: 0 20px;
    margin-bottom: 50px;
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
  font-size: 1rem;
  text-transform: uppercase;
  list-style-type: none;
  text-align: center;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${12 / 16}rem;
  }
`

const InfoNum = styled.li`
  font-family: 'Gotu', sans-serif;
  color: #6c6d6e;
  font-size: 1rem;
  text-align: center;
  list-style-type: none;

  @media ${QUERIES.phoneAndSmaller} {
    font-size: ${12 / 16}rem;
  }
`
