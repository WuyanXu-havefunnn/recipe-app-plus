import styled from 'styled-components'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

export default function Layout(props) {
  return (
    <>
      <Header />
      <Wrapper>
        <Main>{props.children}</Main>
        <Sidebar />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  padding: 60px 60px 0 60px;
`
const Main = styled.main`
  padding-right: 60px;
  flex: 1;
`
