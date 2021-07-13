import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'

const logoStartImage = 'littlehutlogo.svg'
const logoEndImage = 'logohover.svg'

const getImage = (filename) => `url('/images/${filename}')`

export default function Header() {
  const [logoSwitched, setLogoSwitched] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setLogoSwitched(true)
    }, 1000)
  }, [])

  return (
    <Wrapper>
      <LogoWrapper
        style={{
          '--background': logoSwitched
            ? getImage(logoEndImage)
            : getImage(logoStartImage),
          '--width': logoSwitched ? '500px' : '300px',
          '--height': logoSwitched ? '150px' : '70px',
        }}
      >
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
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 25px 3%;
  position: relative;
`

const LogoWrapper = styled.div`
  display: flex;
  padding-top: 40px;
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
  background-image: var(--background);
  background-size: contain;
  background-repeat: no-repeat;
  width: var(--width);
  height: var(--height);
  cursor: pointer;
  margin-bottom: 5px;
  transition: ease-out 150ms;
`
