import styled from 'styled-components'
import LifeHeading from './LifeHeading'
import { QUERIES } from '../lib/constants'
import ImageCaption from './ImageCaption'

export default function LifeGarden() {
  return (
    <Wrapper>
      <LifeHeading
        tagLine="my not-so-fruitful garden 👩🏻‍🌾"
        postDate="June 12, 2021"
      />

      <ImageWrapper>
        <Image src="/images/homestrawberries.JPG" />
      </ImageWrapper>
      <ImageCaption imageDescription="strawberry flowers and hand-drawn strawberry fruits " />
      <Story>
        Home strawberries in the early spring! (acutually only the leaves and
        flowers... I drew the strawberries on the picture) Just want them to
        grow a lot of juicy pretty strawberries so that I can have a bowl of
        freshness from the garden. And the other day I found that In the
        cilantro I planted are blosssoming pretty petite white flowers! What a
        pleasant surprise!
      </Story>
      <ImageWrapper>
        <Image src="/images/cilantro.jpg" />
      </ImageWrapper>
      <ImageCaption imageDescription="i could never imagine how cute the cilantro flowers are" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

// const Images = styled.div`
//   /* width: 100%; */
//   display: flex;
//   justify-content: space-around;
//   flex-wrap: wrap;
//   gap: 50px;

//   @media ${QUERIES.phoneAndSmaller} {
//     justify-content: center;
//     align-items: center;
//   }
// `

const ImageWrapper = styled.div`
  width: 100%;
  padding: 10px 120px;
  @media ${QUERIES.tabletAndSmaller} {
    padding: 0px;
  }
`

const Image = styled.img`
  width: 100%;
`

const Story = styled.p`
  font-family: 'Gotu', sans-serif;
  font-size: ${18 / 16}rem;
  padding: 25px 300px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 20px;
    font-size: 1rem;
  }
`
