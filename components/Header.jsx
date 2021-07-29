import React from 'react'
import styled from 'styled-components'
import Nav from './Nav'
import Link from 'next/link'
import { QUERIES } from '../lib/constants'

const logoStartImage = 'littlehutlogo.svg'
const logoEndImage = 'logohover.svg'

const getImage = (filename) => `url('/images/${filename}')`

export default function Header() {
  const [logoSwitched, setLogoSwitched] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      setLogoSwitched(true)
    }, 1000)
  })

  return (
    <Wrapper>
      <Link href="/">
        <a>
          <LogoWrapper
            style={{
              '--background': logoSwitched
                ? getImage(logoEndImage)
                : getImage(logoStartImage),
              '--width': logoSwitched ? '500px' : '300px',
              '--height': logoSwitched ? '150px' : '70px',
            }}
          >
            <Logo />
            <HutLogo />
          </LogoWrapper>
        </a>
      </Link>

      <Nav />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background-color: #f5f5f5;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 40px;
`

const LogoWrapper = styled.div`
  display: flex;
`

const HutLogo = styled.div`
  background-image: url('/images/hut.svg');
  background-size: contain;
  background-repeat: no-repeat;
  width: 150px;
  height: 150px;
  transform: translateX(-60px);

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`

const Logo = styled.div`
  background-image: var(--background);
  background-size: contain;
  background-repeat: no-repeat;
  width: var(--width);
  height: var(--height);
  cursor: pointer;
  transition: ease-out 130ms;

  @media ${QUERIES.tabletAndSmaller} {
    background-image: ${getImage(logoEndImage)};
    width: 320px;
    height: 100px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    background-image: ${getImage(logoEndImage)};
    width: 310px;
    height: 100px;
  }
`
