import styled from 'styled-components'

export default function Seasoning({ children }) {
  return (
    <Wrapper>
      <Heading>Seasoning •••</Heading>
      <Content>{children}</Content>
      <Note>
        You are encouraged be flexible and creative about seasoning your dish:
        adjust the amount of seasoning based on your own taste and preferences
        🧂🥄
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
  color: #cc3d01;
  text-transform: uppercase;
  font-size: ${18 / 16}rem;
`

const Note = styled.small`
  font-family: 'Gotu', sans-serif;
  font-size: 1rem;
  color: #cc3d01;
`

const Content = styled.div`
  font-family: 'Gotu', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
