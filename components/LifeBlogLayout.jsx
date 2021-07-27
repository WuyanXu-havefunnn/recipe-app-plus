import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { QUERIES } from '../lib/constants'

export default function LifeBlogLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* @media ${QUERIES.tabletAndSmaller} {
    justify-content: center;
    align-items: center;
  }
  @media ${QUERIES.phoneAndSmaller} {
    justify-content: center;
    align-items: center;
  } */
`
const Main = styled.main`
  flex: 1;
  padding-top: 60px;
  padding-bottom: 60px;

  /* @media ${QUERIES.tabletAndSmaller} {
    padding: 0;
  } */
`
