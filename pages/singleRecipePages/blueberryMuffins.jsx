import styled from 'styled-components'
import SingleRecipeLayout from '../../components/SingleRecipeLayout'
import SingleRecipeHeading from '../../components/SingleRecipeHeading'
import { QUERIES } from '../../lib/constants'
import ImageFullSize from '../../components/ImageFullSize'
import SingleRecipePrepInfo from '../../components/SingleRecipePrepInfo'
import SingleRecipeIngredient from '../../components/SingleRecipeIngredient'
import DryIngredient from '../../components/DryIngredient'
import IngredientItem from '../../components/IngredientItem'
import WetIngredient from '../../components/WetIngredient'

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

      <SingleRecipeIngredient>
        <DryIngredient>
          <IngredientItem
            name="all purpose flour"
            measurement="2 1/2 cups (300g)"
          />
          <IngredientItem name="salt" measurement="3/4 tsp" />
          <IngredientItem name="baking powder" measurement="2 tsp" />
        </DryIngredient>
        <WetIngredient>
          <IngredientItem
            name=" lactose-free milk  + almond milk"
            measurement="1 cup in total (240ml)"
          />
          <IngredientItem name="egg" measurement="2" />
          <IngredientItem
            name="granulated no calorie sweetener"
            measurement="1/2 cup"
          />
          <IngredientItem name="pure vanilla extract" measurement="1 tsp" />
          <IngredientItem name="melted butter" measurement="1/4 cup (60ml)" />
          <IngredientItem name="vegetable oil" measurement="1/4 cup (60ml)" />
          <IngredientItem
            name="lemon/vanilla yogurt"
            measurement="1/4 cup (60ml)"
          />
          <IngredientItem name="lemon juice" measurement="1/4 cup (60ml)" />
          <IngredientItem name="lemon zest" measurement="1 whole lemon" />
        </WetIngredient>
      </SingleRecipeIngredient>
    </SingleRecipeLayout>
  )
}
