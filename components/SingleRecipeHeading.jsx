import styled from 'styled-components'
import { QUERIES } from '../lib/constants'

export default function SingleRecipeHeading({ title, postDate, intro }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <PostDate>{postDate}</PostDate>
      <Intro>{intro}</Intro>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 40px;
  }
`

const Title = styled.h1`
  font-family: 'Mansalva', cursive;
  font-size: ${28 / 16}rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  padding: 10px;
  text-align: center;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 20px;
    font-size: ${24 / 16}rem;
  }
`

const PostDate = styled.small`
  font-family: 'Gotu', sans-serif;
  color: #676768;
  font-size: ${14 / 16}rem;
  letter-spacing: 1px;
  padding: 5px;
`

const Intro = styled.p`
  font-family: 'Gotu', sans-serif;
  font-size: 1rem;
  max-width: ${700 / 16}rem;
  padding: 20px 0px;

  @media ${QUERIES.tabletAndSmaller} {
    /* padding: 20px; */
    font-size: 1rem;
  }
`
