import styled from 'styled-components'

export default function RecipesPageHeading({ intro, name }) {
  return (
    <Heading>
      <HeadingName>{name}</HeadingName>
      <Intro>{intro}</Intro>
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
  font-family: 'Gotu', sans-serif;
  font-size: ${24 / 16}rem;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 20px;
`

const Intro = styled.p`
  font-family: 'Karla', sans-serif;
  color: gray;
  font-size: ${18 / 16}rem;
  margin-bottom: 20px;
  line-height: 1.5;
`
