import styled from 'styled-components'

export default function FooterLeft() {
  return (
    <Wrapper>
      <TopSection>
        <FooterLogo />
        <Tagline>Thanks for dropping by!</Tagline>
      </TopSection>
      <Copyright>
        © 2021-present Wuyan's little Hut. All Rights Reserved.
      </Copyright>
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
  gap: 10px;
`

const FooterLogo = styled.div`
  background: url(/images/logofull.svg);
  background-size: cover;
  background-repeat: no-repeat;
  width: 180px;
  height: 70px;
`

const Tagline = styled.p`
  font-family: 'Gotu', sans-serif;
  font-size: ${12 / 16}rem;
  letter-spacing: 1px;
`

const Copyright = styled.small`
  font-family: 'Benne', serif;
  font-size: ${11 / 16}rem;
  letter-spacing: 1px;
`
const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
