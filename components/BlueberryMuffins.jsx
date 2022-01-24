import styled from 'styled-components'
import SingleRecipeLayout from './SingleRecipeLayout'
import SingleRecipeHeading from './SingleRecipeHeading'
import { QUERIES } from '../lib/constants'
import ImageFullSize from './ImageFullSize'
import SingleRecipePrepInfo from './SingleRecipePrepInfo'
import IngredientSection from './IngredientSection'
import DryIngredients from './DryIngredients'
import IngredientItem from './IngredientItem'
import WetIngredients from './WetIngredients'
import SingleRecipeInstuctions from './SingleRecipeInstructions'
import InstructionList from './InstructionList'
import Instuction from './Instruction'

export default function BlueberryMuffins() {
  return (
    <>
      <SingleRecipeHeading
        title="Refreshing Blueberry Lemon Muffin Bombs"
        postDate="July 27, 2021"
        intro="Summer is here and I have been yearning for sweet things for a long time... Since I always feel guilty after eating desserts, here we are -- Happy Light-sweet Blueberry Lemon Muffins!"
      />

      <ImageFullSize imageSrc="/images/blueberrymuffinshorizontal.JPG" />

      <SingleRecipePrepInfo
        serves="12"
        prepTime="10 min"
        cookTime="20 min"
        totalTime="30 min"
      />

      <IngredientSection>
        <DryIngredients>
          <IngredientItem
            name="all purpose flour"
            measurement="2 1/2 cups (300g)"
          />
          <IngredientItem name="salt" measurement="3/4 tsp" />
          <IngredientItem name="baking powder" measurement="2 tsp" />
        </DryIngredients>
        <WetIngredients>
          <IngredientItem
            name="lactose-free milk / milk of your choice"
            measurement="1 cup (240ml)"
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
        </WetIngredients>
      </IngredientSection>

      <SingleRecipeInstuctions>
        <InstructionList>
          <Instuction>
            Put a cup of water in the oven and Preheat the oven to 400°F
            (204°C).
          </Instuction>
          <Instuction>
            Prepare 7 3/4 ounces of 🫐fresh blueberries🫐 , reserve a handful in a
            small bowl.
          </Instuction>
          <Instuction>
            Sprinkle 1 tsp of the dry mixture on the big portion of the
            blueberries, and toss the blueberries around so that every one of
            them is covered with the dry.
          </Instuction>
          <Instuction>
            Add the wet to the dry, use a spatula to mix them up.
          </Instuction>
          <Instuction>
            Add the prepared blueberries and fold them into the batter.
          </Instuction>
          <Instuction>
            Use a spoon/ice cream scoop to transfer the batter into a muffin tin
            (be generous and fill each spot all the way up).
          </Instuction>
          <Instuction>
            Pop in a couple of blueberries on top of each muffin (the more the
            merrier!).
          </Instuction>
          <Instuction>Bake at 400°F (204°C) for 20 minutes. </Instuction>
          <Instuction>
            Take the muffin tin out from and oven and let it cool down for 10
            minutes and... wooo🥳 Enjoy!
          </Instuction>
        </InstructionList>
      </SingleRecipeInstuctions>
    </>
  )
}
