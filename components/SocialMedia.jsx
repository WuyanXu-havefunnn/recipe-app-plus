import styled from 'styled-components'
import SocialMediaIcon from './SocialMediaIcon'

export default function SocialMedia() {
  return (
    <Wrapper>
      <Tagline>Follow me on</Tagline>
      <SocialAccounts>
        <SocialMediaIcon link="#" src="/images/instagram.svg" />

        <SocialMediaIcon
          link="https://medium.com/@xuwuyantracy"
          src="/images/medium.svg"
        />
        <SocialMediaIcon
          link="https://www.reddit.com/user/havefunnnn"
          src="/images/reddit.svg"
        />
        <SocialMediaIcon
          link="https://twitter.com/tracywxu"
          src="/images/twitter.svg"
        />
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
