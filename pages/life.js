import styled from 'styled-components'
import LifeBlogLayout from '../components/LifeBlogLayout'
import LifeGarden from '../components/LifeGarden'
import StanleyTrip from '../components/StanleyTrip'


export default function LifePage() {
  return (
    <LifeBlogLayout>
      <Wrapper>
        <LifeGarden />
        {/* <Divider1 />
        
        <Divider2 /> */}
        <StanleyTrip />
      </Wrapper>
    </LifeBlogLayout>
  )
}

const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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