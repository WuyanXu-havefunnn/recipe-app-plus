import styled from 'styled-components'
import { QUERIES } from '../lib/constants'

export default function TextContent({ content }) {
  return <Story>{content}</Story>
}

const Story = styled.p`
  font-family: 'Gotu', sans-serif;
  font-size: ${18 / 16}rem;
  padding: 20px 150px;
  line-height: 1.5;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 20px;
    font-size: 1rem;
  }
`
