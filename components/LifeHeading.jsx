import styled from 'styled-components'
import { QUERIES } from '../lib/constants'

export default function LifeHeading({ tagLine, postDate }) {
  return (
    <Wrapper>
      <Tagline>{tagLine}</Tagline>
      <PostDate>{postDate}</PostDate>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Tagline = styled.h1`
  font-family: 'Mansalva', cursive;
  text-align: center;
  font-size: ${25 / 16}rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  padding: 10px;
  line-height: 1.5;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 20px;
    font-size: ${22 / 16}rem;
  }
`

const PostDate = styled.small`
  font-family: 'Gotu', sans-serif;
  color: #635f5f;
  font-style: italic;
  font-size: ${14 / 16}rem;
  letter-spacing: 1px;
`
