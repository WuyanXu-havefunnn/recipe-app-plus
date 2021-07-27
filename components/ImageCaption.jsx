import styled from 'styled-components'

export default function ImageCaption({ imageDescription }) {
  return <Caption>{imageDescription}</Caption>
}

const Caption = styled.caption`
  font-size: 1rem;
  font-family: 'Benne', serif;
  font-style: italic;
  color: #777676;
  letter-spacing: 0.5px;
`
