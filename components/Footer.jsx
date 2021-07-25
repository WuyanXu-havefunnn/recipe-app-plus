import styled from 'styled-components'
import FooterRight from './FooterRight'
import FooterLeft from './FooterLeft'
import Copyright from './Copyright'
import { QUERIES } from '../lib/constants'

export default function Footer() {
  return (
    <Wrapper>
      <FooterContent>
        <FooterLeft />
        <FooterRight />
      </FooterContent>
      <Copyright />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 50px;
  padding: 60px 200px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 60px 50px;
    text-align: center;
  }

  @media ${QUERIES.phoneAndSmaller} {
    padding: 40px 80px;
  }
`

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${QUERIES.tabletAndSmaller} {
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
  }
`
