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
    keywords: ['hotdog', 'hot dog', 'hotdogs'],
    emoji: '🌭'
  },
  {
    keywords: ['salt'],
    emoji: '🧂'
  },
  {
    keywords: ['egg', 'fried egg', 'eggs'],
    emoji: '🍳'
  },
  {
    keywords: ['waffle', 'waffles'],
    emoji: '🧇'
  },
  {
    keywords: ['birthday  cake', 'cake'],
    emoji: '🎂'
  },
  {
    keywords: ['pancake', 'pancakes'],
    emoji: '🥞'
  },
  {
    keywords: ['butter', 'margarine'],
    emoji: '🧈'
  },
  {
    keywords: ['pretzel', 'pretzels'],
    emoji: '🥨'
  },
  {
    keywords: ['bagel', 'bagels'],
    emoji: '🥯'
  },
  {
    keywords: ['cheese'],
    emoji: '🧀'
  },
  {
    keywords: ['sandwich', 'sandwhiches'],
    emoji: '🥪'
  },
  {
    keywords: ['taco', 'tacos'],
    emoji: '🌮'
  },
  {
    keywords: ['burrito', 'burritos'],
    emoji: '🌯'
  },
  {
    keywords: ['canned'],
    emoji: '🥫'
  },
  {
    keywords: ['dumpling', 'dumplings'],
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
    keywords: ['beers'],
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
    keywords: ['doughnut', 'doughnuts'],
    emoji: '🍩'
  },
  {
    keywords: ['cookie', 'cookies'],
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
    keywords: ['tomato', 'tomatoes'],
    emoji: '🍅'
  },
  {
    keywords: ['eggplant', 'eggplants'],
    emoji: '🍆'
  },
  {
    keywords: ['grape', 'grapes'],
    emoji: '🍇'
  },
  {
    keywords: ['melon', 'melons'],
    emoji: '🍈'
  },
  {
    keywords: ['watermelon', 'watermelons'],
    emoji: '🍉'
  },
  {
    keywords: ['tangerine', 'tangerines'],
    emoji: '🍊'
  },
  {
    keywords: ['banana', 'bananas'],
    emoji: '🍌'
  },
  {
    keywords: ['pineapple', 'pineapples'],
    emoji: '🍍'
  },
  {
    keywords: ['peach', 'peaches'],
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
    keywords: ['kiwi', 'kiwis'],
    emoji: '🥝'
  },
  {
    keywords: ['lemon', 'lemons'],
    emoji: '🍋'
  },
  {
    keywords: ['mango', 'mangos'],
    emoji: '🥭'
  },
  {
    keywords: ['apple', 'red apple', 'apples'],
    emoji: '🍎'
  },
  {
    keywords: ['apple', 'green apple', 'apples'],
    emoji: '🍏'
  },
  {
    keywords: ['pear', 'pears'],
    emoji: '🍐'
  },
  {
    keywords: ['corn'],
    emoji: '🌽'
  },
  {
    keywords: ['pepper', 'jalapeno', 'spicy', 'hot', 'peppers'],
    emoji: '🌶'
  },
  {
    keywords: ['mushroom', 'mushrooms'],
    emoji: '🍄'
  },
  {
    keywords: ['coconut', 'coconuts'],
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
    keywords: ['avocado', 'avocados'],
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
    keywords: ['onion', 'onions'],
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
    keywords: ['cucumber', 'cucumbers', 'pickle', 'pickles'],
    emoji: '🥒'
  },
  {
    keywords: ['bacon'],
    emoji: '🥓'
  },
  {
    keywords: ['potato', 'potatoes'],
    emoji: '🥔'
  },
  {
    keywords: ['carrot', 'carrots'],
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
    keywords: ['egg', 'eggs'],
    emoji: '🥚'
  },
  {
    keywords: ['coffee'],
    emoji: '☕'
  },
];

const convertToEmojis = (string, amountToReturn) => {
  let words = string.toLowerCase().trim().replace(/ /g,"|");
  const regex = new RegExp(`(?:${words})`);

  let emojis = [];

  foodEmojis.forEach((emoji) => {
    const result = emoji.keywords.filter(content => regex.test(content));
    
    if (result.length > 0) {
      emojis.push(emoji.emoji);
    }
  });

  if (amountToReturn) {
    return emojis.slice(0, amountToReturn);
  } else {
    return emojis;
  }
}

export { convertToEmojis };