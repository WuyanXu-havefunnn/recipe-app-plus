import styled from 'styled-components'
import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'
import RecipeListHeading from './RecipeListHeading'

export default function VegetarianRecipes() {
  return (
    <>
      <RecipeListHeading
        title="Vegetarian Recipes"
        intro=" Let's fuel our stomach and soul with greeness and lightness!"
      />

      <RecipeGrid>
        <RecipeItem
          link="/singleRecipePages/tomatoTofu"
          imgSrc="/images/tomatoTofu.JPG"
          name="healthy yammy tomatooo-fu!"
        />

        <RecipeItem
          link="/singleRecipePages/broccoliBeef"
          imgSrc="/images/cornMuffin.jpg"
          name="super healthy corn muffins"
        />

        <RecipeItem
          imgSrc="/images/homestyleEggplant.jpg"
          name="homestyle eggplant"
        />

        <RecipeItem
          link="/singleRecipePages/blueberryMuffins"
          imgSrc="/images/blueberrymuffins.JPG"
          name="Blueberry lemon muffin bombs"
        />

        {/* <RecipeItem
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
        /> */}
      </RecipeGrid>
    </>
  )
}
