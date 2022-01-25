import styled from 'styled-components'
import AllRecipes from '../components/AllRecipes'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      {/* <Heading>
        Hi, my name is Wuyan. Welcome to my little Chinese cooking hut :)
      </Heading> */}
      <HomePic />
      <AllRecipes />
    </Layout>
  )
}

const Heading = styled.h2`
  font-family: 'Gotu', sans-serif;
  color: #342614;
  line-height: 35px;
  font-size: ${30 / 16}rem;
  margin-bottom: 60px;
`

const HomePic = styled.div`
  background-image: url('/images/house.jpg');
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  height: 450px;
  width: auto;
  background-repeat: no-repeat;
  margin-bottom: 20px;
`
