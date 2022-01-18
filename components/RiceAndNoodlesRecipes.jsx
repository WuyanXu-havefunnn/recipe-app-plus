import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'
import RecipeListHeading from './RecipeListHeading'

export default function RiceAndNoodlesRecipes() {
  return (
    <>
      <RecipeListHeading
        title="Rice & Noodles Recipes"
        intro="Shall I compare thee to a hot bowl of noodles? 🍜  Thou art more lovely and more temperate than a bowl a warm rice. 🍚"
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
