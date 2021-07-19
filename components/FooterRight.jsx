import styled from 'styled-components'

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
`

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`

const Tagline = styled.h2`
  font-family: 'Gotu', sans-serif;
  font-size: ${12 / 16}rem;
  letter-spacing: 1px;
`
const TagGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const Tag = styled.p`
  font-family: 'Gotu', sans-serif;
  font-size: ${12 / 16}rem;
  padding-right: 15px;
  &:hover {
    cursor: pointer;
    color: #d81159;
  }
`

const Emoji = styled.i`
  font-size: ${18 / 16}rem;
`
