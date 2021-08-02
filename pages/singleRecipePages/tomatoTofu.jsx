import styled from 'styled-components'
import SingleRecipeLayout from '../../components/SingleRecipeLayout'
import SingleRecipeHeading from '../../components/SingleRecipeHeading'
import { QUERIES } from '../../lib/constants'
import ImageFullSize from '../../components/ImageFullSize'
import SingleRecipePrepInfo from '../../components/SingleRecipePrepInfo'
import IngredientSection from '../../components/IngredientSection'
import IngredientItem from '../../components/IngredientItem'
import SingleRecipeInstuctions from '../../components/SingleRecipeInstructions'
import InstructionList from '../../components/InstructionList'
import Instuction from '../../components/Instruction'
import Seasoning from '../../components/Seasoning'
import GeneralIngredient from '../../components/GeneralIngredient'

export default function TomatoTofu() {
  return (
    <SingleRecipeLayout>
      <SingleRecipeHeading
        title="healthy fun yammy Tomatooo-fu!"
        intro="Summer is here and I have been yearning for sweet things for a long time... Since I always feel guilty after eating desserts, here we are -- Happy Light-sweet Blueberry Lemon Muffins!"
      />

      <ImageFullSize imageSrc="/images/tomatoTofu.JPG" />

      <SingleRecipePrepInfo
        serves="2"
        prepTime="5 min"
        cookTime="15 min"
        totalTime="20 min"
      />

      <IngredientSection>
        <GeneralIngredient>
          <IngredientItem name="firm tofu" measurement="2 packages" />
          <IngredientItem name="medium-size vine tomatoes" measurement="5" />
          <IngredientItem name="freshly grated ginger" measurement="2 tsp" />
          <IngredientItem name="freshly minced garlic" measurement="4 cloves" />
          <IngredientItem name="green onions" measurement="5" />
          <IngredientItem
            name="low-sodium vegetable/chicken broth"
            measurement="1.5 cups"
          />
        </GeneralIngredient>

        <Seasoning>
          <IngredientItem name="olive oil" measurement="1/2 cup" />
          <IngredientItem name="soy sauce" measurement="2 tsp" />
          <IngredientItem name="oyster sauce" measurement="2 tsp" />
          <IngredientItem name="white pepper powder" measurement="1 tsp" />
          <IngredientItem name="sesame oil" measurement="1 tsp" />
          <IngredientItem
            name="white sesame"
            measurement="1 tsp (for garnish)"
          />
        </Seasoning>
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
    </SingleRecipeLayout>
  )
}
