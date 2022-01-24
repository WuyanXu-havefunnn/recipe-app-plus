import styled from 'styled-components'
import AboutMe from './AboutMe'
import Newsletter from './Newsletter'
import SocialMedia from './SocialMedia'
import CategoryPills from './CategoryPills'

import { QUERIES } from '../lib/constants'

export default function Sidebar() {
  return (
    <Wrapper>
      <AboutMe />
      <Newsletter />
      <SocialMedia />
      {/* <CategoryPills /> */}
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  width: 200px;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`
