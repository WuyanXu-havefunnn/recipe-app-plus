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
        title="healthy yammy Tomatooo-fu!"
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
          <IngredientItem name="medium-firm tofu" measurement="2 packages" />
          <IngredientItem name="medium-size vine tomatoes" measurement="5" />
          <IngredientItem name="freshly grated ginger" measurement="1 tbsp" />
          <IngredientItem name="freshly minced garlic" measurement="4 cloves" />
          <IngredientItem
            name="finely chopped scallion"
            measurement="5 stalks"
          />
          <IngredientItem
            name="low-sodium vegetable/chicken broth"
            measurement="1.5 cups"
          />
        </GeneralIngredient>

        <Seasoning>
          <IngredientItem name="olive oil" measurement="2 tbsp" />
          <IngredientItem name="soy sauce" measurement="3/4 tbsp" />
          <IngredientItem name="oyster sauce" measurement="1 tbsp" />
          <IngredientItem name="white pepper powder" measurement="1 tsp" />
          <IngredientItem name="sesame oil" measurement="1 tsp" />
          <IngredientItem name="salt" measurement="1/2 tsp" />
          <IngredientItem
            name="white sesame"
            measurement="1 tsp (for garnish)"
          />
        </Seasoning>
      </IngredientSection>

      <SingleRecipeInstuctions>
        <InstructionList>
          <Instuction>
            Cut the tofu into squares of about 1.5cm/ 0.5inch thick. Pad each
            piece dry with a clean tea towel or kitchen paper.
          </Instuction>
          <Instuction>
            Preheat the pan over high heat for 30 seconds. Put 1/4 cups of olive
            oil in a wok (or a frying pan) and carefully place the tofu squares
            into the pan (Do not overlap. You might have to fry them in 2
            batches or in 2 pans).
          </Instuction>
          <Instuction>
            Turn the heat down to medium. When one side becomes golden brown,
            flip over to cook the other side. Transfer onto a plate when both
            sides are done.
          </Instuction>

          <Instuction>
            While waiting for the tofu, cut tomatoes into small wedges. Add 1
            more tablespoon oil to another wok or deep-cooking pan, turn up the
            heat to high, and add ginger, garlic, tomatoes, and half of the
            chopped scallions.
          </Instuction>
          <Instuction>
            Add 1/2 tsp of salt to the tomatoes, stir fry over medium heat for 2
            minutes.
          </Instuction>
          <Instuction>
            Cover with a lid and leave to braise over medium-low heat for 4 mins
            until the tomatoes and tofu are soften. Add a little more
            broth/water if needed.
          </Instuction>
          <Instuction>
            Add 1 tsp of white pepper power and 1 tsp of sessame oil. Give
            everything a gentle stir for 30 second. Garnish with white sesame
            and the rest of the scallions. Dish out and serve immediately.
          </Instuction>
        </InstructionList>
      </SingleRecipeInstuctions>
    </SingleRecipeLayout>
  )
}
