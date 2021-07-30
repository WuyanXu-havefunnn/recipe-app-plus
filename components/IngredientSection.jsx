import styled from 'styled-components'
import { QUERIES } from '../lib/constants'

export default function IngredientSection({ children }) {
  return (
    <Wrapper>
      <SectionHeading>Ingredients</SectionHeading>
      <Content>{children}</Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 50px 0;

  @media ${QUERIES.phoneAndSmaller} {
    margin: 50px 20px;
  }
`

const SectionHeading = styled.h2`
  font-family: 'Gotu', sans-serif;
  font-size: ${24 / 16}rem;
  letter-spacing: 1px;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  border-left: 2px solid #fcb97b;
  padding: 20px 30px;
  margin-left: 50px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 20px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    margin-left: 0;
  }
`
