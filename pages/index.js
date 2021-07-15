import styled from 'styled-components'
import Layout from '../components/Layout'
import RecentRecipes from '../components/RecentRecipes'
import SummerRecipes from '../components/SummerRecipes'


export default function Home() {
  return (
    <Layout>
      <RecentRecipes />
      <SummerRecipes />
    </Layout>
  )
}


