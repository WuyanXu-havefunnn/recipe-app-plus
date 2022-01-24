import Layout from './Layout'
import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'
import { recipesData, headingWithTag } from '../data/recipesData'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import CategoryPills from './CategoryPills'
import RecipesPageHeading from './RecipesPageHeading'

export default function AllRecipes() {
  const [currentTag, setCurrentTag] = useState('all')
  const router = useRouter()
  const { tag } = router.query

  const changeTagHandler = (newTag) => {
    setCurrentTag(newTag)
  }

  return (
    <>
      <RecipesPageHeading
        name={headingWithTag[currentTag].name}
        intro={headingWithTag[currentTag].intro}
      />

      <CategoryPills onChangeTag={changeTagHandler} currentTag={currentTag} />

      <RecipesWithTag tag={currentTag} />
    </>
  )
}

function RecipesWithTag({ tag }) {
  return (
    <>
      <RecipeGrid>
        {tag === 'all'
          ? recipesData.map(({ title, photoUrl, slug }) => (
              <Link key={slug} href={`/recipes/${slug}`}>
                <a>
                  <RecipeItem imgSrc={photoUrl} name={title} />
                </a>
              </Link>
            ))
          : recipesData
              .filter(({ tags }) => tags.includes(tag))
              .map(({ title, photoUrl, slug }) => (
                <Link key={slug} href={`/recipes/${slug}`}>
                  <a>
                    <RecipeItem imgSrc={photoUrl} name={title} />
                  </a>
                </Link>
              ))}
      </RecipeGrid>
    </>
  )
}
