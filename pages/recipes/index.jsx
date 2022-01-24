import Layout from '../../components/Layout'
// import RecipeGrid from '../../components/RecipeGrid'
// import RecipeItem from '../../components/RecipeItem'
// import { recipesData, headingWithTag } from '../../data/recipesData'
// import { useRouter } from 'next/router'
// import { useState } from 'react'
// import Link from 'next/link'
// import CategoryPills from '../../components/CategoryPills'
// import RecipesPageHeading from '../../components/RecipesPageHeading'
import AllRecipes from '../../components/AllRecipes'

export default function RecipesPage() {
  return (
    <Layout>
      <AllRecipes />
    </Layout>
  )
}

// function RecipesWithTag({ tag }) {
//   return (
//     <>
//       <RecipeGrid>
//         {tag === 'all'
//           ? recipesData.map(({ title, photoUrl, slug }) => (
//               <Link key={slug} href={`/recipes/${slug}`}>
//                 <a>
//                   <RecipeItem imgSrc={photoUrl} name={title} />
//                 </a>
//               </Link>
//             ))
//           : recipesData
//               .filter(({ tags }) => tags.includes(tag))
//               .map(({ title, photoUrl, slug }) => (
//                 <Link key={slug} href={`/recipes/${slug}`}>
//                   <a>
//                     <RecipeItem imgSrc={photoUrl} name={title} />
//                   </a>
//                 </Link>
//               ))}
//       </RecipeGrid>
//     </>
//   )
// }
