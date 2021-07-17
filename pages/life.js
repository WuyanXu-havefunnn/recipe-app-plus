import styled from 'styled-components'
import Layout from '../components/Layout'
import LifeGarden from '../components/LifeGarden'
import StanleyTrip from '../components/StanleyTrip'


export default function LifePage() {
  return (
    <Layout>
      <Wrapper>
        <LifeGarden />
        <Divider1 />
        <StanleyTrip />
        <Divider2 />
      </Wrapper>
    </Layout>
  )
}

const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`

const Divider1=styled.div`
  background: url("/images/elephantDivider.png");
  height:60px;
  width: 100%;
  background-size: contain;
`

const Divider2=styled.div`
  background: url("/images/elephantDivider2.png");
  height:70px;
  width: 100%;
  background-size: contain;
`