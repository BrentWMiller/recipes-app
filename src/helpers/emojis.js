const foodEmojis = [
  {
    keywords: ['burger', 'hamburger'],
    emoji: '🍔'
  },
  {
    keywords: ['pizza'],
    emoji: '🍕'
  },
  {
    keywords: ['meat', 'beef'],
    emoji: '🍖'
  },
  {
    keywords: ['lamb'],
    emoji: '🥩'
  },
  {
    keywords: ['chicken', 'poultry'],
    emoji: '🍗'
  },
  {
    keywords: ['hotdog', 'hot dog'],
    emoji: '🌭'
  },
  {
    keywords: ['salt'],
    emoji: '🧂'
  },
  {
    keywords: ['egg', 'fried egg'],
    emoji: '🍳'
  },
  {
    keywords: ['waffle'],
    emoji: '🧇'
  },
  {
    keywords: ['pancake'],
    emoji: '🥞'
  },
  {
    keywords: ['butter', 'margarine'],
    emoji: '🧈'
  },
  {
    keywords: ['pretzel'],
    emoji: '🥨'
  },
  {
    keywords: ['bagel'],
    emoji: '🥯'
  },
  {
    keywords: ['cheese'],
    emoji: '🧀'
  },
  {
    keywords: ['sandwich'],
    emoji: '🥪'
  },
  {
    keywords: ['taco'],
    emoji: '🌮'
  },
  {
    keywords: ['burrito'],
    emoji: '🌯'
  },
  {
    keywords: ['canned'],
    emoji: '🥫'
  },
  {
    keywords: ['dumpling'],
    emoji: '🥟'
  },
  {
    keywords: ['cookie', 'fortune'],
    emoji: '🥠'
  },
  {
    keywords: ['oyster'],
    emoji: '🦪'
  },
  {
    keywords: ['cake', 'moon'],
    emoji: '🥮'
  },
  {
    keywords: ['oden'],
    emoji: '🍢'
  },
  {
    keywords: ['soup'],
    emoji: '🥣'
  },
  {
    keywords: ['cupcake'],
    emoji: '🧁'
  },
  {
    keywords: ['honey'],
    emoji: '🍯'
  },
  {
    keywords: ['milk'],
    emoji: '🥛'
  },
  {
    keywords: ['tea'],
    emoji: '🍵'
  },
  {
    keywords: ['mate'],
    emoji: '🧉'
  },
  {
    keywords: ['sake'],
    emoji: '🍶'
  },
  {
    keywords: ['campagne'],
    emoji: '🍾'
  },
  {
    keywords: ['wine', 'cabernet', 'merlot', 'zinfandel', 'syrah', 'shiraz', 'malbec', 'pinot noir', 'sangiovese', 'nebbiolo'],
    emoji: '🍷'
  },
  {
    keywords: ['cocktail', 'drink', 'martini'],
    emoji: '🍸'
  },
  {
    keywords: ['cocktail', 'drink', 'tropical'],
    emoji: '🍹'
  },
  {
    keywords: ['beer'],
    emoji: '🍺'
  },
  {
    keywords: ['beer', 'beers'],
    emoji: '🍻'
  },
  {
    keywords: ['cocktail', 'drink'],
    emoji: '🥃'
  },
  {
    keywords: ['ice'],
    emoji: '🧊'
  },
  {
    keywords: ['beer', 'cocktail', 'drink'],
    emoji: '🥤'
  },
  {
    keywords: ['falafel'],
    emoji: '🧆'
  },
  {
    keywords: ['fish'],
    emoji: '🐟'
  },
  {
    keywords: ['fish', 'tropical fish'],
    emoji: '🐠'
  },
  {
    keywords: ['fish', 'blowfish'],
    emoji: '🐡'
  },
  {
    keywords: ['fish', 'shark'],
    emoji: '🦈'
  },
  {
    keywords: ['peanut', 'nut'],
    emoji: '🥜'
  },
  {
    keywords: ['rice', 'cooked rice'],
    emoji: '🍚'
  },
  {
    keywords: ['rice', 'rice craker'],
    emoji: '🍘'
  },
  {
    keywords: ['rice', 'rice ball'],
    emoji: '🍙'
  },
  {
    keywords: ['curry', 'curry rice'],
    emoji: '🍛'
  },
  {
    keywords: ['fish cake'],
    emoji: '🍥'
  },
  {
    keywords: ['ramen', 'udon'],
    emoji: '🍜'
  },
  {
    keywords: ['spaghetti', 'pasta'],
    emoji: '🍝'
  },
  {
    keywords: ['bread'],
    emoji: '🍞'
  },
  {
    keywords: ['fries'],
    emoji: '🍟'
  },
  {
    keywords: ['sweet potato'],
    emoji: '🍠'
  },
  {
    keywords: ['sushi'],
    emoji: '🍣'
  },
  {
    keywords: ['shrimp'],
    emoji: '🍤'
  },
  {
    keywords: ['doughnut'],
    emoji: '🍩'
  },
  {
    keywords: ['cookie'],
    emoji: '🍪'
  },
  {
    keywords: ['cake', 'shortcake'],
    emoji: '🍰'
  },
  {
    keywords: ['ice cream'],
    emoji: '🍨'
  },
  {
    keywords: ['soft serve', 'ice cream'],
    emoji: '🍦'
  },
  {
    keywords: ['shaved ice', 'snowcone'],
    emoji: '🍧'
  },
  {
    keywords: ['cake', 'birthday cake'],
    emoji: '🎂'
  },
  {
    keywords: ['chocolate'],
    emoji: '🍫'
  },
  {
    keywords: ['candy'],
    emoji: '🍬'
  },
  {
    keywords: ['lollipop'],
    emoji: '🍭'
  },
  {
    keywords: ['custard'],
    emoji: '🍮'
  },
  {
    keywords: ['dango'],
    emoji: '🍡'
  },
  {
    keywords: ['pie'],
    emoji: '🥧'
  },
  {
    keywords: ['tomato'],
    emoji: '🍅'
  },
  {
    keywords: ['eggplant'],
    emoji: '🍆'
  },
  {
    keywords: ['grape'],
    emoji: '🍇'
  },
  {
    keywords: ['melon'],
    emoji: '🍈'
  },
  {
    keywords: ['watermelon'],
    emoji: '🍉'
  },
  {
    keywords: ['tangerine'],
    emoji: '🍊'
  },
  {
    keywords: ['banana'],
    emoji: '🍌'
  },
  {
    keywords: ['pineapple'],
    emoji: '🍍'
  },
  {
    keywords: ['peach'],
    emoji: '🍑'
  },
  {
    keywords: ['cherry', 'cherries'],
    emoji: '🍒'
  },
  {
    keywords: ['strawberry', 'strawberries'],
    emoji: '🍓'
  },
  {
    keywords: ['kiwi'],
    emoji: '🥝'
  },
  {
    keywords: ['lemon'],
    emoji: '🍋'
  },
  {
    keywords: ['mango'],
    emoji: '🥭'
  },
  {
    keywords: ['apple', 'red apple'],
    emoji: '🍎'
  },
  {
    keywords: ['apple', 'green apple'],
    emoji: '🍏'
  },
  {
    keywords: ['pear'],
    emoji: '🍐'
  },
  {
    keywords: ['corn'],
    emoji: '🌽'
  },
  {
    keywords: ['pepper', 'jalapeno', 'spicy', 'hot'],
    emoji: '🌶'
  },
  {
    keywords: ['mushroom'],
    emoji: '🍄'
  },
  {
    keywords: ['coconut'],
    emoji: '🥥'
  },
  {
    keywords: ['soup', 'potluck'],
    emoji: '🍲'
  },
  {
    keywords: ['croissant', 'crescent roll'],
    emoji: '🥐'
  },
  {
    keywords: ['avocado'],
    emoji: '🥑'
  },
  {
    keywords: ['leafy', 'celery'],
    emoji: '🥬'
  },
  {
    keywords: ['broccoli'],
    emoji: '🥦'
  },
  {
    keywords: ['garlic', 'clove'],
    emoji: '🧄'
  },
  {
    keywords: ['onion'],
    emoji: '🧅'
  },
  {
    keywords: ['chesnut', 'nut'],
    emoji: '🌰'
  },
  {
    keywords: ['cactus'],
    emoji: '🌵'
  },
  {
    keywords: ['herb', 'thyme', 'basil', 'mint', 'cilantro', 'dill', 'parsley'],
    emoji: '🌿'
  },
  {
    keywords: ['cucumber', 'pickle'],
    emoji: '🥒'
  },
  {
    keywords: ['bacon'],
    emoji: '🥓'
  },
  {
    keywords: ['potato'],
    emoji: '🥔'
  },
  {
    keywords: ['carrot'],
    emoji: '🥕'
  },
  {
    keywords: ['baguette'],
    emoji: '🥖'
  },
  {
    keywords: ['salad'],
    emoji: '🥗'
  },
  {
    keywords: ['flatbread'],
    emoji: '🥙'
  },
  {
    keywords: ['egg'],
    emoji: '🥚'
  },
  {
    keywords: ['coffee'],
    emoji: '☕'
  },
];

const convertToEmojis = (string, amountToReturn = 1) => {
  const words = string.toLowerCase().trim().split(' ');
  let emojis = [];

  foodEmojis.forEach((emoji) => {
    const result = words.filter(word => 
      emoji.keywords.some(re => re.includes(word))
    );

    if (result.length > 0) {
      emojis.push(emoji.emoji);
    } 
  });

  return emojis.slice(0, amountToReturn);
}

export { convertToEmojis };