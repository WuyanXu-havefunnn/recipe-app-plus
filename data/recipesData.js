import BlueberryMuffins from '../components/BlueberryMuffins'
import BroccoliBeef from '../components/BroccoliBeef'
import CornMuffins from '../components/CornMuffins'
import GreenPepperFriedChicken from '../components/GreenPepperFriedChicken'
import HomestyleEggplants from '../components/HomestyleEggplants'
import NinjaPotSpicyBeef from '../components/NinjaPotSpicyBeef'
import TomatoTofu from '../components/TomatoTofu'

export const recipesData = [
  {
    title: 'broccoli beef',
    photoUrl: '/images/broccoliBeef.jpg',
    tags: ['beef', 'healthy'],
    slug: 'broccoli-beef',
    tagline: 'A symphony of silky beef and crunchy broccoli.',
    component: BroccoliBeef,
  },
  {
    title: 'homestyle eggplant',
    photoUrl: '/images/homestyleEggplant.jpg',
    tags: ['vegetarian', 'easy'],
    slug: 'homestyle-eggplant',
    tagline: 'A little sweet, a little tangy, melts in your mouth.',
    component: HomestyleEggplants,
  },
  {
    title: 'Blueberry lemon muffin bombs',
    photoUrl: '/images/blueberrymuffins.JPG',
    tags: ['baking', 'sweet', 'quick'],
    slug: 'blueberry-lemon-muffin-bombs',
    tagline: 'Pillowy muffin with warm blueberry explosions.',
    component: BlueberryMuffins,
  },
  {
    title: 'healthy yammy tomatooo-fu!',
    photoUrl: '/images/tomatoTofu.JPG',
    tags: ['vegetarian', 'healthy', 'quick', 'easy'],
    slug: 'tomato-tofu',
    tagline: 'Hearty tomato and tofu stew with a kick.',
    component: TomatoTofu,
  },
  {
    title: 'super healthy corn muffins',
    photoUrl: '/images/cornMuffin.jpg',
    tags: ['vegetarian', 'healthy', 'quick', 'easy', 'sweet', 'baking'],
    slug: 'healthy-corn-muffins',
    tagline: "Mom's muffins and grandma's cornbread all in one!",
    component: CornMuffins,
  },
  {
    title: 'ninja pot spicy sichuan-style beef stew',
    photoUrl: '/images/spicyBeefStew.jpg',
    tags: ['beef', 'spicy', 'quick'],
    slug: 'ninja-pot-spicy-sichuan-style-beef-stew',
    tagline: 'A numbing, firey, pleasing tastebud assault.',
    component: NinjaPotSpicyBeef,
  },
  {
    title: 'Mrs. pepper and Mr. chicken',
    photoUrl: '/images/greenPepperFriedChicken.jpg',
    tags: ['chicken', 'spicy', 'quick'],
    slug: 'green-pepper-fried-chicken',
    tagline: 'An unlikely couple makes magic when they meet.',
    component: GreenPepperFriedChicken,
  },
  // belows are placeholder recipes
  //   {
  //     title: 'sour & spicy noodles',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1555126634-323283e090fa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  //     tags: ['quick', 'spicy', 'easy', 'noodles', 'vegetarian'],
  //     slug: 'sour-spicy-noodles',
  //   },

  //   {
  //     title: 'when walnuts meet chicken',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1605490500023-b96e71486495?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80',
  //     tags: ['chicken'],
  //     slug: 'walnut-chicken',
  //   },
  //   {
  //     title: 'dummy-cooked chinese choy sum',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1603093058762-25254620b98d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  //     tags: ['vegetarian', 'quick', 'easy', 'healthy'],
  //     slug: 'quick-chinese-choy-sum',
  //   },
  //   {
  //     title: 'seafood udon',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1552611052-33e04de081de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  //     tags: ['seafood', 'noodles', 'quick', 'easy', 'healthy'],
  //     slug: 'seafood-udon',
  //   },

  //   {
  //     title: 'watermelon cooler',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1603076403761-831da9395592?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1011&q=80',
  //     tags: ['healthy', 'vegetarian', 'sweet'],
  //     slug: '',
  //   },
  //   {
  //     title: 'braised pork on rice',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1570275239925-4af0aa93a0dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80',
  //     tags: ['pork', 'rice'],
  //     slug: 'pork-rice',
  //   },
  //   {
  //     title: 'mini cuttie crystal bum',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1598149079663-965f159671f2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=708&q=80',
  //     tags: ['healthy', 'baking'],
  //     slug: 'mini-crystal-bum',
  //   },
  //   {
  //     title: 'porky pork rib',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1603076861434-01358aad844a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
  //     tags: ['pork', 'spicy'],
  //     slug: 'braised-pork-rib',
  //   },
  //   {
  //     title: '10-minute pan-fried dumplings',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1608651274010-091503600373?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=8',
  //     tags: ['quick', 'easy'],
  //     slug: 'quick-pan-fried-dumplings',
  //   },

  //   {
  //     title: 'Korean-style bibibum!',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
  //     tags: ['rice', 'easy'],
  //     slug: 'korean-styled-bibibum',
  //   },
  //   {
  //     title: 'chef pro fried rice',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1250&q=80',
  //     tags: ['egg', 'rice', 'quick', 'easy'],
  //     slug: 'chef-pro-fried-rice',
  //   },
  //   {
  //     title: 'refreshing shrimp salad',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1598235494097-955416628382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=982&q=80',
  //     tags: ['seafood', 'healthy', 'easy'],
  //     slug: 'refreshing-shrimp-salad',
  //   },
  //   {
  //     title: 'homey mushroom soup noodle',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1605491126399-508e54934dd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=973&q=80',
  //     tags: ['noodles', 'vegetarian', 'easy'],
  //     slug: 'mushroom-soup-noodle',
  //   },
  //   {
  //     title: 'chilled tofu',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1598086736340-a71430f6757b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1729&q=80',
  //     tags: ['vegetarian', 'healthy', 'easy'],
  //     slug: 'chilled-tofu',
  //   },

  //   {
  //     title: 'how to make pork steam bun like a Chinese grandma',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1563104307-944928bb174a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  //     tags: ['baking', 'pork'],
  //     slug: 'pork-steam-bun',
  //   },
  //   {
  //     title: 'ginger & scallion dungeness crab',
  //     photoUrl:
  //       'https://images.unsplash.com/photo-1542803417-f2be3270347d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80',
  //     tags: ['seafood'],
  //     slug: 'ginger-scallion-dungeness-crab',
  //   },
]

export const headingWithTag = {
  rice: {
    name: 'Rice Recipes',
    intro: 'Shall I compare thee to a warm bowl of rice? 🍚',
  },
  noodles: {
    name: 'Noodles Recipes',
    intro:
      'Thou art more lovely and temperate than a hot bowl of noodles... 🍜',
  },
  seafood: {
    name: 'Seafood Recipes',
    intro:
      'Just 🐟  imagine  🦐  you are swimming  🐙  in the vast  🐚  blue  🐠  ocean  🦞  and surrounded  🦀  by many fairies 🦑 of the sea  🌊...',
  },
  beef: { name: 'Beef Recipes', intro: 'The moo of mystery... 🐮' },
  sweet: {
    name: 'Sweet Recipes',
    intro:
      'O my Love is like a red, red rose, that’s newly sprung in June; O my Love is like the melody, that’s sweetly played in tune. 🌹',
  },
  spicy: {
    name: 'Spicy Recipes',
    intro: "Feeling a bit bland in life? You've come to the right place. 🧞‍♀️",
  },
  baking: {
    name: 'Baking Recipes',
    intro: 'bake bake bake bake 🥯 🍰 🍩 🥖 🥨 🥐 🧁',
  },
  vegetarian: {
    name: 'Vegetarian Recipes',
    intro:
      'Eating in, breathing out, I am blooming as a flower, I am fresh as the dew, I am solid as a mountain, I am firm as the earth, I am free... 🍃 ',
  },
  healthy: {
    name: 'Healthy Recipes',
    intro: 'Healthy and Hearty are my two best sisters. 👯‍♀️',
  },
  quick: {
    name: 'Quick & Easy Recipes',
    intro:
      'Confucius said, "Desire to have things done quickly prevents their being done thoroughly." I beg to differ... 🤔',
  },
  egg: {
    name: 'Egg Recipes',
    intro: 'Once upon a time in the Kingdom of Egg... 🥚🥚🥚',
  },
  chicken: {
    name: 'Chicken Recipes',
    intro: 'Lord, help me be the person my chicken thinks I am. 🐣 🐥 🐓',
  },

  all: {
    name: "Wuyan's Recipes",
    intro:
      "What makes a great home-cooked dish? All you need is a pinch of joy, a squeeze of love, and a bit of improvisation! Make all the dishes you want in this freestyle recipe book, let's have some fun cooking!",
  },
}
