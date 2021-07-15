import styled from 'styled-components'

export default function IndexContent() {
  return (
    <Wrapper>
      <TopicHeading>
        <Tagline>most recent</Tagline>
        <ReadMore>
          <a href="#">read more 🎏</a>
        </ReadMore>
      </TopicHeading>

      <DishDisplay>
        <RecentRecipe>
          <Dish>
            <DishPic></DishPic>
            <DishName></DishName>
          </Dish>
        </RecentRecipe>
      </DishDisplay>
    </Wrapper>
  )
}

const Wrapper = styled.main`
  padding: 60px;
  flex-grow: 1;
`
const TopicHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Tagline = styled.h2`
  font-family: 'Benne', serif;
  font-size: 0.7rem;
  text-transform: uppercase;
  margin: 0 0 5px 5px;
  letter-spacing: 1px;
`

const ReadMore = styled.div`
  text-decoration: none;
  font-family: 'Benne', serif;
  font-size: 0.8rem;
  color: #6a994e;
`
