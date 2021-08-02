import styled from 'styled-components'

export default function GeneralIngredient({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Content = styled.div`
  font-family: 'Gotu', sans-serif;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
