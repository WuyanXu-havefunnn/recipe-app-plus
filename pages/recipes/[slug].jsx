import SingleRecipeLayout from '../../components/SingleRecipeLayout'
import { recipesData } from '../../data/recipesData'
import { useRouter } from 'next/router'
import BroccoliBeef from '../../components/BroccoliBeef'

//look the slug in the recipe data (filter)
// do it inside a useEffect to wait until slug is define
// on the first round, you may not have a
// recipe item will have a link which links the slug

export default function RecipesPage() {
  const router = useRouter()
  const { slug } = router.query

  // if component exists, access the component key
  const RecipeComponent = recipesData.find(
    (recipe) => recipe.slug === slug,
  )?.component

  return (
    <SingleRecipeLayout>
      {RecipeComponent && <RecipeComponent />}
      {/* <BroccoliBeef /> */}
    </SingleRecipeLayout>
  )
}
