import styled from 'styled-components'
import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'

export default function VegetarianRecipes() {
  return (
    <>
      <Heading>
        <HeadingName>Vegetarian Recipes</HeadingName>
        <Intro>
          Let's fuel our stomach and soul with greeness and lightness!
        </Intro>
      </Heading>

      <RecipeGrid>
        <RecipeItem
          link="/singleRecipePages/tomatoTofu"
          imgSrc="/images/tomatoTofu.JPG"
          name="healthy yammy tomatooo-fu!"
        />

        <RecipeItem
          link="/life"
          imgSrc="https://images.unsplash.com/photo-1603076403761-831da9395592?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1011&q=80"
          name="watermelon cooler"
        />

        <RecipeItem
          link="/life"
          imgSrc="https://images.unsplash.com/photo-1598149079663-965f159671f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80"
          name="mini cuttie crystal bum"
        />

        <RecipeItem
          link="#"
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
