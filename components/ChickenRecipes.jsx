import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'
import RecipeListHeading from './RecipeListHeading'

export default function ChickenRecipes() {
  return (
    <>
      <RecipeListHeading
        title="Chicken Recipes"
        intro="Lord, help me be the person my chicken think I am. 🐣 🐥 🐓"
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
