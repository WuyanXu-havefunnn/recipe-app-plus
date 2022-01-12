import styled from 'styled-components'
import { QUERIES } from '../lib/constants'

export default function FooterTag({ name, link }) {
  return <Tag href={link}>{name}</Tag>
}

const Tag = styled.a`
  font-family: 'Gotu', sans-serif;
  font-size: ${13 / 16}rem;
  padding-right: 15px;
  &:hover {
    cursor: pointer;
    color: #fa800e;
  }
  @media ${QUERIES.tabletAndSmaller} {
    padding-right: 0;
  }
`
