import styled from 'styled-components'

export default function ImageCaption({ imageDescription }) {
  return <Caption>{imageDescription}</Caption>
}

const Caption = styled.caption`
  font-size: ${14 / 16}rem;
  font-family: 'Gotu', sans-serif;
  font-style: italic;
  color: #777676;
  letter-spacing: 0.5px;
`
