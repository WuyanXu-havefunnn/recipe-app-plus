import styled from 'styled-components'
import AllRecipes from '../components/AllRecipes'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <HomeHeadingWrapper>
        <HomeHeading>
          Hi, my name is Wuyan. Welcome to my little Chinese cooking hut :)
        </HomeHeading>
        <HomePic />
      </HomeHeadingWrapper>
      <AllRecipes />
    </Layout>
  )
}

const HomeHeadingWrapper = styled.div`
  text-align: center;
`

const HomeHeading = styled.h2`
  font-family: 'Mansalva', cursive;
  color: #342614;
  line-height: 35px;
  font-size: ${22 / 16}rem;
  /* text-align: center; */
  margin-bottom: 25px;
`

const HomePic = styled.div`
  background-image: url('/images/house.jpg');
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  max-width: 1000px;
  height: 450px;
  width: auto;
  background-repeat: no-repeat;
  margin-bottom: 20px;
`
