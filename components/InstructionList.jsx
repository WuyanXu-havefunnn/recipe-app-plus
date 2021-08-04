import styled from 'styled-components'

export default function InstuctionList({ children }) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 20px;
  list-style: auto;
`
