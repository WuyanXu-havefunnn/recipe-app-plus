import styled from 'styled-components'
import Newsletter from './Newsletter'
import SocialMedia from './SocialMedia'
import CategoryPills from './CategoryPills'
import { QUERIES } from '../lib/constants'

export default function Sidebar() {
  return (
    <Wrapper>
      <AboutMe>
        <NameLine>Hey there, I'm Wuyan 🤓</NameLine>
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
  border: 1px solid red;
  height: 100%;

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
  }
`

const AboutMe = styled.div`
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
