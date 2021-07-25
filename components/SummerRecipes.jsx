import styled from 'styled-components'
import RecipeGrid from './RecipeGrid'
import RecipeItem from './RecipeItem'

export default function SummerRecipes() {
  return (
    <>
      <Heading>
        <HeadingName>Summer Recipes</HeadingName>
        <ReadMore>
          <a href="#">read more 🏖</a>
        </ReadMore>
      </Heading>

      <RecipeGrid>
        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1250&q=80"
          name="chef pro fried rice"
        />
        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1598235494097-955416628382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=982&q=80"
          name="refreshing shrimp salad"
        />
        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1605491126399-508e54934dd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=973&q=80"
          name="homey mushroom soup noodle"
        />
        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1594012009577-ba2826f91b4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
          name="homey mushroom soup noodle"
        />

        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1598086736340-a71430f6757b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1729&q=80"
          name="chilled tofu"
        />

        <RecipeItem
          imgSrc="https://images.unsplash.com/photo-1603076403761-831da9395592?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1011&q=80"
          name="watermelon balls"
        />
      </RecipeGrid>
    </>
  )
}

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  /* border-top: 1px double #bad4aa; */
  padding-bottom: 15px;
  /* padding-top: 30px; */
`

const HeadingName = styled.h1`
  font-family: 'Benne', serif;
  font-size: 1rem;
  text-transform: uppercase;
  /* margin-bottom: 15px; */
  letter-spacing: 1px;
`
const ReadMore = styled.div`
  text-decoration: none;
  font-family: 'Benne', serif;
  font-size: 1rem;
  color: #858383;
  &:hover {
    color: #fa800e;
  }
`
