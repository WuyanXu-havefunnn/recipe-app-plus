import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'
import RecipeListHeading from './RecipeListHeading'

export default function BeefRecipes() {
  return (
    <>
      <RecipeListHeading
        title="Beef Recipes"
        intro="Welcome to beef-lovers' heaven 🥩"
      />

      <RecipeGrid>
        <RecipeItem
          link="/singleRecipePages/broccoliBeef"
          imgSrc="/images/broccoliBeef.jpg"
          name="The Ultimate Broccoli Beef"
        />

        <RecipeItem
          link="/singleRecipePages/broccoliBeef"
          imgSrc="/images/spicyBeefStew.jpg"
          name="ninja pot spicy sichuan-style beef stew"
        />
      </RecipeGrid>
    </>
  )
}
