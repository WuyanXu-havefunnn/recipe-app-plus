import styled from 'styled-components'

export default function Seasoning({ children }) {
  return (
    <Wrapper>
      <Heading>Seasoning •••</Heading>
      <Content>{children}</Content>
      <Note>
        you are encouraged be flexible and creative when it comes to seasoning:
        increase or reduce the amount of certain seasoning based on your own
        taste and preferences 🧂
      </Note>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
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
