import styled from 'styled-components'

export default function Instuction({ children }) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.li`
  font-family: 'Gotu', sans-serif;
  font-size: 1rem;
`
