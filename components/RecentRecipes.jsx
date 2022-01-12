import styled from 'styled-components'
import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'

export default function RecentRecipes() {
  return (
    <>
      <Heading>
        <HeadingName>Recent Recipes</HeadingName>
        <ReadMore>
          <a href="../recipes">read more 🎏</a>
        </ReadMore>
      </Heading>

      <RecipeGrid>
        <RecipeItem
          link="/singleRecipePages/blueberryMuffins"
          imgSrc="/images/blueberrymuffins.JPG"
          name="Blueberry lemon muffin bombs"
        />

        <RecipeItem
          link="/singleRecipePages/tomatoTofu"
          imgSrc="/images/tomatoTofu.JPG"
          name="healthy yammy tomatooo-fu!"
        />

        <RecipeItem
          // link="/singleRecipePages/blueberryMuffins"
          imgSrc="/images/broccoliBeef.jpg"
          name="broccoli beef"
        />

        <RecipeItem
          imgSrc="/images/homestyleEggplant.jpg"
          name="homestyle eggplant"
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
    color: #fa800e;
  }
`
