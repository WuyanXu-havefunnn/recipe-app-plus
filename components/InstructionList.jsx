import styled from 'styled-components'

export default function InstuctionList({ children }) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 30px;
`
