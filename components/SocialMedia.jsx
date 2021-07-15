import styled from 'styled-components'

export default function SocialMedia() {
  return (
    <Wrapper>
      <Tagline>Follow me on</Tagline>
      <SocialAccounts>
        <a href="#">
          <Instagram />
        </a>
        <a href="#">
          <Facebook />
        </a>
      </SocialAccounts>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  width: 150px;
`

const Tagline = styled.h3`
  font-family: 'Benne', serif;
  font-size: 1rem;
  margin: 50px 0 10px 0;
  letter-spacing: 0.5px;
`

const SocialAccounts = styled.div`
  display: flex;
`

const Instagram = styled.div`
  background-image: url('/images/instagram.svg');
  width: 25px;
  height: 25px;
  margin-right: 8px;
`
const Facebook = styled.div`
  background-image: url('/images/facebook.svg');
  width: 25px;
  height: 25px;
  margin-right: 8px;
`
