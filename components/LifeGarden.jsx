import styled from 'styled-components'
import LifeHeading from './LifeHeading'
import ImageCaption from './ImageCaption'
import ImageFullSize from './ImageFullSize'
import TextContent from './TextContent'
import ImageSection from './ImageSection'

export default function LifeGarden() {
  return (
    <Wrapper>
      <LifeHeading
        tagLine="my not-so-fruitful garden 👩🏻‍🌾"
        postDate="June 12, 2021"
      />
      <ImageSection>
        <ImageFullSize imageSrc="/images/homestrawberries.JPG" />
        <ImageCaption imageDescription="strawberry flowers and hand-drawn strawberry fruits " />
      </ImageSection>

      <TextContent
        content="Home strawberries in the early spring! (acutually only the leaves and
          flowers... I drew the strawberries on the picture) Just want them to
          grow a lot of juicy pretty strawberries so that I can have a bowl of
          freshness from the garden. And the other day I found that In the
          cilantro I planted are blosssoming pretty petite white flowers! What a
          pleasant surprise!"
      />
      <ImageSection>
        <ImageFullSize imageSrc="/images/cilantro.jpg" />
        <ImageCaption imageDescription="i could never imagine how cute the cilantro flowers are" />
      </ImageSection>
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
