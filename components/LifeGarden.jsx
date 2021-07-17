import styled from 'styled-components'
import LifeHeading from './LifeHeading'

export default function LifeGarden() {
  return (
    <Wrapper>
      <LifeHeading
        tagLine="my not-so-fruitful garden 👩🏻‍🌾"
        postDate="June 12, 2021"
      />
      <ImgWrapper>
        <Img1 />
        <Img2 />
      </ImgWrapper>
      <Story>
        Home strawberries in the early spring! (acutually only the leaves and
        flowers... I drew the strawberries on the picture) Just want them to
        grow a lot of juicy pretty strawberries so that I can have a bowl of
        freshness from the garden. And the other day I found that In the
        cilantro I planted are blosssoming pretty petite white flowers! What a
        pleasant surprise!
      </Story>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`
const Img1 = styled.div`
  background-image: url('images/homestrawberries.JPG');
  background-repeat: no-repeat;
  background-size: contain;
  width: 300px;
  height: 220px;
`

const Img2 = styled.div`
  background-image: url('/images/cilantro.jpg');
  width: 300px;
  height: 220px;
  background-repeat: no-repeat;
  background-size: contain;
`

const Story = styled.p`
  font-family: 'Gotu', sans-serif;
  font-size: ${14 / 16}rem;
  padding: 0 30px;
`
