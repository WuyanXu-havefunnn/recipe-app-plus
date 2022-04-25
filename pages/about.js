import styled from 'styled-components'
import LifeBlogLayout from '../components/LifeBlogLayout'
import { QUERIES } from '../lib/constants'

export default function AboutPage() {
  return (
    <LifeBlogLayout>
      <ImageWrapper>
        <Image src="https://images.squarespace-cdn.com/content/v1/576a96f103596e7bb345d062/1505126961886-CRYLVDXAFSCDWQ9D6J62/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/Soup1.jpg?format=1500w" />

        <Image src="https://images.squarespace-cdn.com/content/v1/576a96f103596e7bb345d062/1505143108469-WPK1WVW47ZKNU7TQZDBS/Summer+rolls.jpg?format=2500w" />

        <Image src="https://images.squarespace-cdn.com/content/v1/576a96f103596e7bb345d062/1507201267544-GM8Q9NBD2KHNX7O76S9R/SWEETCORNSOUP.jpg?format=1500w" />
      </ImageWrapper>

      <Heading>Hello, nice to meet you! My name is Wuyan :)</Heading>
      <TextContent>
        I am passionate about eating and cooking Chinese food at home. I find
        cooking to be a natural way to express my creative energy. My mom always
        says that delicious food makes people good inside and out. I would like
        to dedicate this personal blog to posting my recipes for homemade
        Chinese food and all kinds of food in general.
      </TextContent>

      <TextContent>
        As a dedication to appreciating beauty and miracles in everyday life, I
        will also share bits of my life with my dear husband Shadi in this blog
        too.
      </TextContent>

      <TextContent>Let's cook, share, and live together! 🥳 </TextContent>
    </LifeBlogLayout>
  )
}

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 100%;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 15px;
    padding-bottom: 20px;
  }
`

const Image = styled.img`
  width: 33%;
`

const Heading = styled.h1`
  font-family: 'Mansalva', cursive;
  font-size: ${28 / 16}rem;
  text-transform: capitalize;
  letter-spacing: 1px;
  padding: 30px;
  text-align: center;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 20px;
    font-size: ${24 / 16}rem;
  }
`

const TextContent = styled.p`
  font-family: 'Gotu', sans-serif;
  font-size: ${18 / 16}rem;
  padding: 10px 150px;
  letter-spacing: 1px;
  line-height: 1.5;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 20px;
    font-size: 1rem;
  }
`
