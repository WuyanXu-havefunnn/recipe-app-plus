import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'
import RecipeListHeading from './RecipeListHeading'

export default function SeafoodRecipes() {
  return (
    <>
      <RecipeListHeading
        title="Seafood Recipes"
        intro="Just  🐟  imagine  🦐  you're swimming  🐙  in the vast  🦀  blue  🐠  ocean  🦞..."
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
