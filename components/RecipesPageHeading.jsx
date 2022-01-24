import styled from 'styled-components'

export default function RecipesPageHeading({ intro, name }) {
  return (
    <Heading>
      <HeadingName> {name} </HeadingName>
      <Intro> {intro} </Intro>
    </Heading>
  )
}

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  margin-bottom: 15px;
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
