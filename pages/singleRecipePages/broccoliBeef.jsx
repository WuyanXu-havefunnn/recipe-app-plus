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

export default function BroccoliBeef() {
  return (
    <SingleRecipeLayout>
      <SingleRecipeHeading
        title="The Ultimate Broccoli Beef"
        postDate="Jan 17, 2022"
        intro="Whenever thinking about broccoli, I always thought of an scary nightmare scene from a childhood cartoon movie: a little kid fell in sweet sleep with a smile in his face. Suddenly, he got lost in a sprawling dark forest of evil broccoli trees... Today, let's chop those funky broccoli trees down and save that poor little boy! 🦸‍♀️"
      />

      <ImageFullSize imageSrc="/images/broccoliBeef.jpg" />

      <SingleRecipePrepInfo
        serves="2"
        prepTime="15 min"
        cookTime="10 min"
        totalTime="25 min"
      />

      <IngredientSection>
        <GeneralIngredient>
          <IngredientItem
            name="fresh beef (chuck tender)"
            measurement="1.5 pounds"
          />
          <IngredientItem name="fresh broccoli" measurement="3 cups" />
          <IngredientItem name="freshly sliced ginger" measurement="1 tbsp" />
          <IngredientItem
            name="casually sliced garlic"
            measurement="5 cloves"
          />
        </GeneralIngredient>

        <Seasoning>
          <IngredientItem name="olive oil 橄榄油" measurement="2 tbsp" />
          <IngredientItem name="soy sauce 生抽" measurement="1 tbsp" />
          <IngredientItem name="oyster sauce 蚝油" measurement="1 tbsp" />
          <IngredientItem name="dark soy sauce 老抽" measurement="1 tsp" />
          <IngredientItem
            name="freshly ground black pepper 黑胡椒"
            measurement="1 tsp"
          />
          <IngredientItem name="ground ginger 姜粉" measurement="1 tsp" />
          <IngredientItem
            name="corn starch 玉米淀粉/生粉"
            measurement="2 tsp"
            notes="to tenderize the beef"
          />
          <IngredientItem
            name="baking soda 小苏打"
            measurement="1/4 tsp"
            notes="to tenderize the beef"
          />
          <IngredientItem
            name="ground sichuan pepper 花椒粉"
            measurement="1 tsp"
            notes="you can skip it if you don't have it"
          />
        </Seasoning>
      </IngredientSection>

      <SingleRecipeInstuctions>
        <InstructionList>
          <Instuction>
            Soak the beef in cold water for 30 minutes before you start cooking.
            This is to get rid of the blood and impurities inside the meat.
            After this step, the water should turn red and the beef will turn
            slightly white.
          </Instuction>
          <Instuction>
            Take the beef out from the water and rinse in with the tap water.
            Slice our beef into thin slices. Remember to cut against the fiber
            so that your beef will taste less chewy. Put your sliced beef inside
            a medium mixing bowl.
          </Instuction>
          <Instuction>
            Let's marinate the beef! Add the following seasonings into the
            mixing bowl that we used to put sliced beef: 1/2 tbsp soy sauce, 1/2
            tbsp oyster sauce, 1 tsp dark soy sauce, 1 tbsp olive oil, 1 tsp
            ground ginger, 1 tsp ground sichuan pepper, 1 tsp freshly ground
            pepper, 2 tsp corn starch, 1/4 tsp of baking soda. Mix well with the
            beef and marinate for 15 minutes.
          </Instuction>
          <Instuction>
            While marinating the beef with magic seasonings, slice 5 cloves
            garlic and a small chunk of ginger (about 1 tbsp).
          </Instuction>
          <Instuction>
            Cut the broccoli into bite sizes. Blanch it in boiling water for 1-2
            minutes to preserve the green fresh color. Remember not to cover it
            or else the broccoli will lose its green color. Pour the broccoli
            out into a colander and rinse it with running cold tap water. This
            step is to cut the cooking process and keep the broccoli crunchy.
            Shake off the excess water for later use.
          </Instuction>
          <Instuction>
            Now, let's fry some beef! Preheat the frying wok/pan and put 1 tbsp
            of olive oil in. Turn to high heat and add the marinated sliced beef
            in. Quickly separate it so that most of the beef touches the hot
            wok. Let each side fry for 30 seconds. Take the beef out when it is
            half done. Try not to overcook the beef in this step.
          </Instuction>
          <Instuction>
            Take 2 tsp of corn starch and mix it with 3 tbsp of tap water and 1
            tbsp of soy sauce. This mixed sauce will later give the broccoli and
            beef a nice coat.
          </Instuction>
          <Instuction>
            Using the same wok and the oil left in it, let's put some sliced
            garlic and ginger in. Stir fry the garlic and ginger for about 30
            seconds with medium heat. Pour the corn starch water in and stir. It
            should thicken very quickly.
          </Instuction>
          <Instuction>
            Add broccoli to thw wok and fry the broccoli for 30 seconds with
            high heat. Add the beef in. Passionately mix and stir everything in
            the pot together for another 30 seconds. Wola, you're done!
          </Instuction>
          <Instuction>
            Enjoy your hard work when it's still hot! It's so yummy with a bowl
            of rice. 🍚
          </Instuction>
        </InstructionList>
      </SingleRecipeInstuctions>
    </SingleRecipeLayout>
  )
}
