import styled from 'styled-components'

export default function LifeHeading({ tagLine, postDate }) {
  return (
    <Wrapper>
      <Tagline>{tagLine}</Tagline>
      <PostDate>{postDate}</PostDate>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Tagline = styled.h1`
  font-family: 'Benne', serif;
  font-size: 1.3rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  padding: 10px;
`

const PostDate = styled.small`
  font-family: 'Benne', serif;
  color: #605e5e;
  font-style: italic;
  font-size: 0.8rem;
  letter-spacing: 1px;
`
