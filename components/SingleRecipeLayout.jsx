import styled from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import { QUERIES } from '../lib/constants'

export default function SingleRecipeLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <MaxWidthWrapper>
        <Main>{children}</Main>
      </MaxWidthWrapper>

      <Footer />
    </Wrapper>
  )
}

const MaxWidthWrapper = styled.div`
  max-width: 1024px;
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Main = styled.main`
  flex: 1;
  padding: 60px;
  width: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 35px;
    padding-bottom: 60px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 0;
    padding-bottom: 60px;
  }
`
