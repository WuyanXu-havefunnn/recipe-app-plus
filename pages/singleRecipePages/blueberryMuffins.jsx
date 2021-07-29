import { func } from 'prop-types'
import styled from 'styled-components'
import SingleRecipeLayout from '../../components/SingleRecipeLayout'
import SingleRecipeHeading from '../../components/SingleRecipeHeading'
import { QUERIES } from '../../lib/constants'
import ImageFullSize from '../../components/ImageFullSize'
import TextContent from '../../components/TextContent'
import SingleRecipePrepInfo from '../../components/SingleRecipePrepInfo'

export default function BlueberryMuffins() {
  return (
    <SingleRecipeLayout>
      <SingleRecipeHeading
        title="Blueberry Lemon Muffin Bombs"
        postDate="July 27, 2021"
        intro="Summer is here and I have been yearning for sweet things for a long time... Since I always feel guilty after eating desserts, here we are -- Happy Light-sweet Blueberry Lemon Muffins!"
      />
      <SingleRecipePrepInfo
        serves="12"
        prepTime="10 min"
        cookTime="20 min"
        totalTime="30 min"
      />

      <ImageFullSize imageSrc="/images/blueberrymuffinshorizontal.JPG" />
    </SingleRecipeLayout>
  )
}
