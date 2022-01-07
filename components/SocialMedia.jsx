import styled from 'styled-components'

export default function SocialMedia() {
  return (
    <Wrapper>
      <Tagline>Follow me on</Tagline>
      <SocialAccounts>
        <a href="#" target="_blank">
          <Instagram />
        </a>
        <a href="https://medium.com/@xuwuyantracy" target="_blank">
          <Medium />
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
  width: 30px;
  height: 30px;
  margin-right: 8px;
`
const Medium = styled.div`
  background-image: url('/images/medium.svg');
  width: 30px;
  height: 30px;
  margin-right: 8px;
`
