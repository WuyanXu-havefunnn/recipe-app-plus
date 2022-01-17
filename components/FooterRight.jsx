import styled from 'styled-components'
import { QUERIES } from '../lib/constants'
import FooterTag from './FooterTag'

export default function FooterRight() {
  return (
    <Wrapper>
      <Tagline>
        Check out recipes by category! <Emoji>🦄</Emoji>
      </Tagline>
      <Categories>
        <TagGroup>
          <FooterTag link="/vegetarian" name="Vegetarian" />
          <FooterTag name="Quick & Easy" />
          <FooterTag name="Healthy" />
        </TagGroup>
        <TagGroup>
          <FooterTag name="Meat-eater's Love" />
          <FooterTag name="Rice & Noodles" />
          <FooterTag link="/sweet" name="Sweety Sweet Things" />
        </TagGroup>
      </Categories>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 25px;
  padding-top: 35px;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  @media ${QUERIES.tabletAndSmaller} {
    gap: 40px;
  }
`

const Tagline = styled.h2`
  font-family: 'Gotu', sans-serif;
  font-size: ${13 / 16}rem;
  letter-spacing: 1px;
`

const TagGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
`

const Emoji = styled.i`
  font-size: ${18 / 16}rem;
`
