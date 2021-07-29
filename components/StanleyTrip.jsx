import styled from 'styled-components'
import LifeHeading from './LifeHeading'
import { QUERIES } from '../lib/constants'
import ImageFullSize from './ImageFullSize'
import ImageCaption from './ImageCaption'
import TextContent from './TextContent'

export default function StanleyTrip() {
  return (
    <Wrapper>
      <LifeHeading
        tagLine="Our weekend camping & hiking trip to Stanley, ID 🏕"
        postDate="June 12, 2021"
      />

      <ImageFullSize imageSrc="/images/stanleylake.JPG" />
      <ImageCaption imageDescription="view of the beautiful Stanley lake" />
      <TextContent
        content="We moved from California to Idaho in the winter of 2020. We fell in love
        with the stunning wild nature here ever since then..."
      />

      <Images>
        <Image src="/images/stanleyhiking.jpg" />
        <Image src="/images/sbwxstanley.JPG" />
        <Image src="/images/shadi-on-the-log.JPG" />
      </Images>
      <TextContent
        content="We finally managed to hop i our car, of course on a whim, and drove to
        Stanley. The first time we heard about the place was from a pharmacist
        in Costco. We told him that we just moved here and asked whether he had
        any recommendation for a outing destination."
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Images = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 120px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 0px;
  }
`

const Image = styled.img`
  width: 32%;
`
