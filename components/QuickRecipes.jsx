import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'
import RecipeListHeading from './RecipeListHeading'

export default function QuickRecipes() {
  return (
    <>
      <RecipeListHeading
        title="Quick & Easy Recipes"
        intro="Running short of time cooking? Let's make something quick, easy, and tasty happen in no time! 💨"
      />

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
      </RecipeGrid>
    </>
  )
}
