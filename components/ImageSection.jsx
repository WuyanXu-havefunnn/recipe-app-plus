import styled from 'styled-components'

export default function ImageSection({ children }) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
