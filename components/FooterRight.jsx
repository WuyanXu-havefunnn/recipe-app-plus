import styled from 'styled-components'
import { QUERIES } from '../lib/constants'

export default function FooterRight() {
  return (
    <Wrapper>
      <Tagline>
        Recipe Categories <Emoji>🦄</Emoji>
      </Tagline>
      <Categories>
        <TagGroup>
          <Tag>Vegetarian</Tag>
          <Tag>Quick & Easy</Tag>
          <Tag>Healthy</Tag>
        </TagGroup>
        <TagGroup>
          <Tag>Meat-eater's Love</Tag>
          <Tag>Rice & Noodles</Tag>
          <Tag>Sweety Sweet Things</Tag>
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
  padding-top: 10px;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
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

const Tag = styled.p`
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

const Emoji = styled.i`
  font-size: ${18 / 16}rem;
`
