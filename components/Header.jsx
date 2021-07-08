import styled from 'styled-components'
import Nav from './Nav'

export default function Header() {
  return (
    <Wrapper>
      <LogoWrapper>
        <a href="index.html">
          <Logo />
        </a>
        <HutLogo />
      </LogoWrapper>
      <Nav />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: #f5f5f5;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 25px 3%;
  position: relative;
`

const LogoWrapper = styled.div`
  display: flex;
`

const HutLogo = styled.div`
  background-image: url('/images/hut.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 100px;
  height: 100px;
  position: absolute;
  left: 69%;
  bottom: 35%;
`

const Logo = styled.div`
  background-image: url('/images/littlehutlogo.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 300px;
  height: 70px;
  cursor: pointer;
  margin-bottom: 5px;
`
