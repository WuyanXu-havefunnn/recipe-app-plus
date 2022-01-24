import styled from 'styled-components'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'
import { QUERIES } from '../lib/constants'
import CategoryPills from './CategoryPills'

export default function Layout({ children, alignment }) {
  return (
    <>
      <Header />
      <Wrapper alignment={alignment}>
        <RecipesSection>{children}</RecipesSection>
        <Sidebar />
      </Wrapper>
      <Footer />
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: ${(p) => p.alignment || 'baseline'};
  padding: 120px;
  padding-top: 100px;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: center;
    align-items: center;
    padding: 60px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    justify-content: center;
    align-items: center;
    padding: 45px;
  }
`
const RecipesSection = styled.main`
  padding-right: 60px;
  flex: 1;
  @media ${QUERIES.tabletAndSmaller} {
    padding: 0;
  }
`
