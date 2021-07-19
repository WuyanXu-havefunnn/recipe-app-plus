import styled from 'styled-components'
import FooterRight from './FooterRight'
import FooterLeft from './FooterLeft'

export default function Footer() {
  return (
    <Wrapper>
      <FooterLeft />
      <FooterRight />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #f5f5f5;
  height: 250px;
  display: flex;
  justify-content: space-between;
  padding: 50px 200px;
  align-items: flex-end;
`
