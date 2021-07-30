import styled from 'styled-components'

export default function WetIngredients({ children }) {
  return (
    <Wrapper>
      <Heading>Wet Ingredients</Heading>
      <Content>{children}</Content>
      <Note>whisk whisk whisk whisk ~ 🧚🏻‍♀️</Note>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Heading = styled.h3`
  font-family: 'Gotu', sans-serif;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: ${18 / 16}rem;
`

const Note = styled.small`
  font-family: 'Gotu', sans-serif;
  font-size: 1rem;
  color: #cc3d01;
  font-style: italic;
`

const Content = styled.div`
  font-family: 'Gotu', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
