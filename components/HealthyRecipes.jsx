import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'
import RecipeListHeading from './RecipeListHeading'

export default function HealthyRecipes() {
  return (
    <>
      <RecipeListHeading
        title="Healthy Recipes"
        intro="Let's whip some healthy hearty food up here! 🌸"
      />

      <RecipeGrid>
        <RecipeItem
          link="/singleRecipePages/broccoliBeef"
          imgSrc="/images/broccoliBeef.jpg"
          name="The Ultimate Broccoli Beef"
        />

        <RecipeItem
          link="/singleRecipePages/broccoliBeef"
          imgSrc="/images/cornMuffin.jpg"
          name="super healthy corn muffins"
        />

        <RecipeItem
          link="/singleRecipePages/tomatoTofu"
          imgSrc="/images/tomatoTofu.JPG"
          name="healthy yammy tomatooo-fu!"
        />

        <RecipeItem
          imgSrc="/images/homestyleEggplant.jpg"
          name="homestyle eggplant"
        />
      </RecipeGrid>
    </>
  )
}
