import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { QUERIES } from '../lib/constants'

export default function LifeBlogLayout({ children }) {
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const MaxWidthWrapper = styled.div`
  max-width: 1024px;
`
const Main = styled.main`
  flex: 1;
  padding-top: 60px;
  padding-bottom: 60px;
`
