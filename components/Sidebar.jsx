import styled from 'styled-components'
import Newsletter from './Newsletter'
import SocialMedia from './SocialMedia'
import CategoryPills from './CategoryPills'

export default function Sidebar() {
  return (
    <Wrapper>
      <AboutMe>
        <NameLine>Hey there, I'm Wuyan</NameLine>
        <Avatar />
        <IntroContent>
          I love eating and cooking Chinese food at home. I find cooking to be
          the natural way to express my creative energy. My mom always says that
          delicious food can make people good inside and out. Let's cook and
          share together!
        </IntroContent>
      </AboutMe>
      <Newsletter />
      <SocialMedia />
      <CategoryPills />
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  width: 200px;
  padding-left: 50px;
  margin-right: 60px;
  margin-top: 60px;
`

const AboutMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const Avatar = styled.div`
  background-image: url('https://images.unsplash.com/photo-1589952283406-b53a7d1347e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80');
  background-position: right;
  width: 100%;
  height: 150px;
  background-repeat: no-repeat;
  background-size: cover;
`

const NameLine = styled.h3`
  font-family: 'Mansalva', cursive;
  font-size: 1rem;
  margin-bottom: 15px;
`

const IntroContent = styled.p`
  font-size: 0.6rem;
  font-family: 'Gotu', sans-serif;
  margin-top: 15px;
`
