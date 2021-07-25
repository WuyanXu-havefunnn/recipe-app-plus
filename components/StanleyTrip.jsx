import styled from 'styled-components'
import LifeHeading from './LifeHeading'

export default function StanleyTrip() {
  return (
    <Wrapper>
      <LifeHeading
        tagLine="Our weekend camping & hiking trip to Stanley, ID 🏕"
        postDate="June 12, 2021"
      />
      <Img1 />
      <Story>
        We moved from California to Idaho in the winter of 2020. We fell in love
        with the stunning wild nature here ever since then...
      </Story>
      <ImgWrapper>
        <Img2 />
        <Img3 />
        <Img4 />
      </ImgWrapper>
      <Story>
        We finally managed to hop i our car, of course on a whim, and drove to
        Stanley. The first time we heard about the place was from a pharmacist
        in Costco. We told him that we just moved here and asked whether he had
        any recommendation for a outing destination.
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
  align-items: flex-start;
  flex-wrap: wrap;
`

const Img1 = styled.div`
  background-image: url('../images/stanleylake.JPG');
  width: 600px;
  height: 450px;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 30px 25px 0 25px;
`

const Img2 = styled.div`
  background-image: url('../images/stanleyhiking.jpg');
  width: 250px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
`
const Img3 = styled.div`
  background-image: url('../images/sbwxstanley.JPG');
  width: 250px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
`

const Img4 = styled.div`
  background-image: url('../images/shadi-on-the-log.JPG');
  width: 250px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
`

const Story = styled.p`
  font-family: 'Gotu', sans-serif;
  font-size: ${14 / 16}rem;
  padding: 0 30px;
`
