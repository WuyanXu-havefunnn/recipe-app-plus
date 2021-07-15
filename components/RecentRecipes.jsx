import styled from 'styled-components'
import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'

export default function RecentRecipes() {
  return (
    <>
      <Heading>
        <HeadingName>Recent Recipes</HeadingName>
        <ReadMore>
          <a href="#">read more 🎏</a>
        </ReadMore>
      </Heading>

      <RecipeGrid>
        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1358&q=80"
          name="homestyle dumplings"
        />
        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1603092872758-480fbfd59ba8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=921&q=80"
          name="broccoli shrimp"
        />
        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1572083925563-708dcdb63763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
          name="mapo tofu"
        />
        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1603093323671-f860b21f39d3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
          name="chinese spinach with snow-white fungus"
        />

        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1563104307-944928bb174a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
          name="how to make steam bun like a Chinese grandma"
        />
        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1542803417-f2be3270347d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
          name="ginger & scallion dungeness crab"
        />
      </RecipeGrid>
    </>
  )
}

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 15px;
`

const HeadingName = styled.h1`
  font-family: 'Benne', serif;
  font-size: 1rem;
  text-transform: uppercase;
  /* margin-bottom: 15px; */
  letter-spacing: 1px;
`
const ReadMore = styled.a`
  text-decoration: none;
  font-family: 'Benne', serif;
  font-size: 1rem;
  color: #858383;
  &:hover {
    /* color: #6a994e; */
    color: #d81159;
  }
`
