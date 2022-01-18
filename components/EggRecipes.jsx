import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'
import RecipeListHeading from './RecipeListHeading'

export default function EggRecipes() {
  return (
    <>
      <RecipeListHeading
        title="Egg Recipes"
        intro="Once upon a time in the Kingdom of Egg... 🥚🥚🥚"
      />

      <RecipeGrid>
        <RecipeItem
          link="/singleRecipePages/blueberryMuffins"
          imgSrc="/images/blueberrymuffins.JPG"
          name="Blueberry lemon muffin bombs"
        />

        <RecipeItem
          link="/singleRecipePages/broccoliBeef"
          imgSrc="/images/cornMuffin.jpg"
          name="super healthy corn muffins"
        />
      </RecipeGrid>
    </>
  )
}
