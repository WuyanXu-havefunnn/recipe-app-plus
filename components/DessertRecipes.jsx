import styled from 'styled-components'
import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'

export default function DessertRecipes() {
  return (
    <>
      <Heading>
        <HeadingName>Dessert Recipes</HeadingName>
        <Intro>
          Stressed is dessert spelled backwards! Let's enjoy some sweetness in
          life here!
        </Intro>
      </Heading>

      <RecipeGrid>
        <RecipeItem
          link="/singleRecipePages/blueberryMuffins"
          imgSrc="/images/blueberrymuffins.JPG"
          name="Blueberry lemon muffin bombs"
        />

        <RecipeItem
          link="/life"
          imgSrc="https://images.unsplash.com/photo-1603076403761-831da9395592?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1011&q=80"
          name="watermelon cooler"
        />
      </RecipeGrid>
    </>
  )
}

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  margin-bottom: 30px;
`

const HeadingName = styled.h1`
  font-family: 'Benne', serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 10px;
  line-height: 1.5;
`

const Intro = styled.p`
  font-family: 'Gotu', sans-serif;
  font-size: ${14 / 16}rem;
  margin-bottom: 20px;
  line-height: 1.7;
`
