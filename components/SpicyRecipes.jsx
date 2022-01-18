import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'
import RecipeListHeading from './RecipeListHeading'

export default function SpicyRecipes() {
  return (
    <>
      <RecipeListHeading
        title="Spicy Recipes"
        intro="Feeling little bland in life? Let's cure it with some spicy spicy food! 🌶"
      />

      <RecipeGrid>
        <RecipeItem
          link="/singleRecipePages/broccoliBeef"
          imgSrc="/images/spicyBeefStew.jpg"
          name="ninja pot spicy sichuan-style beef stew"
        />
      </RecipeGrid>
    </>
  )
}
