import styled from 'styled-components'
import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'

export default function SummerRecipes() {
  return (
    <>
      <Heading>
        <HeadingName>All Recipes</HeadingName>
        <Intro>
          What makes a great home-cooked dish? A pinch of joy, a squeeze of
          love, and a zest of improvision! Trust me that you can make all of the
          dishes you want in this freestyle recipe, even if you think you are
          not too much of a cook. Come and give it a try!
        </Intro>
      </Heading>

      <RecipeGrid>
        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1605490500023-b96e71486495?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80"
          name="when walnuts meet chicken"
        />
        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1603093058762-25254620b98d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          name="dummy-cooked chinese choy sum"
        />
        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1552611052-33e04de081de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          name="seafood udon"
        />
        <RecipeItem
          imgSrc="https://www.foxandbriar.com/wp-content/uploads/2018/09/shrimp-broccoli-stir-fry-1-of-5.jpg"
          name="broccoli shrimp"
        />

        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1603076403761-831da9395592?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1011&q=80"
          name="watermelon cooler"
        />

        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1570275239925-4af0aa93a0dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
          name="braised pork on rice"
        />

        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1598149079663-965f159671f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80"
          name="mini cuttie crystal bum"
        />

        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1603076861434-01358aad844a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
          name="porky pork"
        />

        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1555126634-323283e090fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          name="sour & spicy noodle"
        />

        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1608651274010-091503600373?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
          name="pan-fried dumplings"
        />

        <RecipeItem
          imgSrc="/images/blueberrymuffins.JPG"
          name="Blueberry lemon muffin bombs"
        />

        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1609501676725-7186f017a4b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
          name="Korean-style bibibum!"
        />
      </RecipeGrid>
    </>
  )
}

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  border-bottom: 1px double #bad4aa;
  margin-bottom: 40px;
`

const HeadingName = styled.h1`
  font-family: 'Benne', serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 15px;
`

const Intro = styled.p`
  font-family: 'Gotu', sans-serif;
  font-size: ${13 / 16}rem;
  margin-bottom: 20px;
`
