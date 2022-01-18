import styled from 'styled-components'

export default function RecipeListHeading({ title, intro }) {
  return (
    <Heading>
      <HeadingName>{title}</HeadingName>
      <Intro>{intro}</Intro>
    </Heading>
  )
}

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  margin-bottom: 30px;
`

const HeadingName = styled.h1`
  font-family: 'Benne', serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 10px;
  line-height: 1.5;
`

const Intro = styled.p`
  font-family: 'Gotu', sans-serif;
  font-size: ${14 / 16}rem;
  margin-bottom: 20px;
  line-height: 1.7;
`
