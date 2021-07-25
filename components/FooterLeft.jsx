import styled from 'styled-components'
import { QUERIES } from '../lib/constants'

export default function FooterLeft() {
  return (
    <Wrapper>
      <TopSection>
        <FooterLogo />
        <Tagline>Thanks for dropping by!</Tagline>
      </TopSection>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`
const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media ${QUERIES.tabletAndSmaller} {
    gap: 0;
  }
`

const FooterLogo = styled.div`
  background: url(/images/logofull.svg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 200px;
  height: 90px;
`

const Tagline = styled.p`
  font-family: 'Gotu', sans-serif;
  font-size: ${12 / 16}rem;
  letter-spacing: 1px;
`
