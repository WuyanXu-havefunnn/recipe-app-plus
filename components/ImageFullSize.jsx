import styled from 'styled-components'
import { QUERIES } from '../lib/constants'

// const getImage = (filename) => `'/images/${filename}')`

export default function ImageFullSize({ imageSrc }) {
  return (
    <ImageWrapper>
      <Image src={imageSrc} />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  width: 100%;
  /* padding: 0 120px; */

  @media ${QUERIES.tabletAndSmaller} {
    padding: 0px;
  }
`

const Image = styled.img`
  width: 100%;
`
