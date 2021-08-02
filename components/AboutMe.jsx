import styled from 'styled-components'

export default function AboutMe() {
  return (
    <Wrapper>
      <NameLine>Hey there, I'm Wuyan 🤓</NameLine>
      <Avatar />
      <IntroContent>
        I'm passionate about eating and cooking Chinese food at home. I find
        cooking to be a natural way to express my creative energy. My mom always
        says that delicious food makes people good inside and out. Let's cook,
        share, and live together!
      </IntroContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Avatar = styled.div`
  background-image: url('https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80');
  /* background-image: url('https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2252&q=80'); */
  background-position: right;
  width: 100%;
  height: 150px;
  background-repeat: no-repeat;
  background-size: cover;
`

const NameLine = styled.h3`
  font-family: 'Gotu', sans-serif;
  letter-spacing: 0.3px;
  font-size: ${14.5 / 16}rem;
  margin-bottom: 10px;
`

const IntroContent = styled.p`
  font-size: ${12 / 16}rem;
  font-family: 'Gotu', sans-serif;
  margin-top: 15px;
`
