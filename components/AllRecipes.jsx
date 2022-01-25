import Layout from './Layout'
import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'
import { recipesData, headingWithTag } from '../data/recipesData'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Link from 'next/link'
import CategoryPills from './CategoryPills'
import RecipesPageHeading from './RecipesPageHeading'
import styled from 'styled-components'

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
  const recipes =
    tag === 'all'
      ? recipesData
      : recipesData.filter(({ tags }) => tags.includes(tag))

  return (
    <>
      <RecipeGrid>
        {recipes.length ? (
          recipes.map(({ slug, photoUrl, title, tagline }) => (
            <Link key={slug} href={`/recipes/${slug}`}>
              <a>
                <RecipeItem imgSrc={photoUrl} name={title} tagline={tagline} />
              </a>
            </Link>
          ))
        ) : (
          <Msg>Recipes are coming soon 🏋️‍♀️</Msg>
        )}
      </RecipeGrid>
    </>
  )
}

const Msg = styled.p`
  font-family: 'Karla', sans-serif;
  font-size: ${18 / 16}rem;
`
