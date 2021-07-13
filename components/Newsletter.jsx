import styled from 'styled-components'

export default function Newsletter() {
  return (
    <Wrapper>
      <Tagline>Newsletter</Tagline>
      <IntroLine>
        I will send out new recipes, links & inspirations about life a few times
        a month ~
      </IntroLine>
      <Email>
        <Input type="email" placeholder="Your email please 🥳" />
        <Button>join</Button>
      </Email>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  width: 150px;
`

const Tagline = styled.h3`
  font-family: 'Benne', serif;
  font-size: 0.9rem;
  margin: 40px 0 10px 0;
  letter-spacing: 0.5px;
`

const IntroLine = styled.p`
  font-family: 'Gotu', sans-serif;
  font-size: 0.6rem;
  width: 150px;
  margin-bottom: 10px;
`

const Input = styled.input`
  font-family: 'Gotu', sans-serif;
  font-size: 0.6rem;
  border: 1px solid #ded9de;
  border-radius: 2px;
  padding: 5px;
`

const Email = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Button = styled.button`
  font-family: 'Mansalva', cursive;
  font-size: 0.7rem;
  color: #d81159;
  background-color: #fce7f6;
  text-transform: uppercase;
  padding: 4px 6px;
  border: none;
  border-radius: 2px;
  margin-left: 5px;

  &:hover {
    cursor: pointer;
  }
`
