const foodEmojis = [
  {
    keywords: ['burger', 'hamburger', 'burgers', 'hamburgers'],
    emoji: '🍔'
  },
  {
    keywords: ['pizza', 'pizzas'],
    emoji: '🍕'
  },
  {
    keywords: ['meat', 'beef'],
    emoji: '🍖'
  },
  {
    keywords: ['lamb', 'lambchop', 'steak', 'filet', 'sirloin', 'porterhouse', 't-bone', 'tbone'],
    emoji: '🥩'
  },
  {
    keywords: ['chicken', 'poultry'],
    emoji: '🍗'
  },
  {
    keywords: ['chicken'],
    emoji: '🐔'
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
    keywords: ['egg', 'fried egg', 'eggs', 'fried eggs'],
    emoji: '🍳'
  },
  {
    keywords: ['waffle', 'waffles'],
    emoji: '🧇'
  },
  {
    keywords: ['birthday  cake', 'cake', 'cakes'],
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
    keywords: ['cheese', 'cheeses', 'cheddar', 'mozzarella'],
    emoji: '🧀'
  },
  {
    keywords: ['sandwich', 'sandwiches'],
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
    keywords: ['oyster', 'oysters'],
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
    keywords: ['cupcake', 'cupcakes'],
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
    keywords: ['tea', 'teas'],
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
    keywords: ['ice', 'icey'],
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
    keywords: ['fish', 'tuna', 'cod', 'salmon'],
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
    keywords: ['crab', 'claw'],
    emoji: '🦀'
  },
  {
    keywords: ['lobster'],
    emoji: '🦞'
  },
  {
    keywords: ['peanut', 'nut', 'nutty', 'nuts', 'peanuts'],
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
    keywords: ['bread', 'loaf'],
    emoji: '🍞'
  },
  {
    keywords: ['fries', 'fry'],
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
    keywords: ['shrimp', 'shrimps'],
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
    keywords: ['cake', 'shortcake', 'slice'],
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
    keywords: ['shaved ice', 'snowcone', 'snowcones'],
    emoji: '🍧'
  },
  {
    keywords: ['chocolate', 'chocolates'],
    emoji: '🍫'
  },
  {
    keywords: ['candy', 'candies', 'sugar'],
    emoji: '🍬'
  },
  {
    keywords: ['lollipop', 'lollipops'],
    emoji: '🍭'
  },
  {
    keywords: ['custard', 'custards'],
    emoji: '🍮'
  },
  {
    keywords: ['dango'],
    emoji: '🍡'
  },
  {
    keywords: ['pie', 'pies'],
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
    keywords: ['corn', 'cob'],
    emoji: '🌽'
  },
  {
    keywords: ['pepper', 'jalapeno', 'jalapenos', 'spicy', 'hot', 'peppers'],
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
    keywords: ['croissant', 'crescent roll', 'croissants'],
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
    keywords: ['chesnut', 'nut', 'chesnuts'],
    emoji: '🌰'
  },
  {
    keywords: ['cactus', 'cacti'],
    emoji: '🌵'
  },
  {
    keywords: ['herb', 'thyme', 'basil', 'mint', 'cilantro', 'dill', 'parsley'],
    emoji: '🌿'
  },
  {
    keywords: ['maple', 'syrup'],
    emoji: '🍁'
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
    keywords: ['salad', 'ceasar', 'iceberg', 'caprese', 'cobb', 'fattoush'],
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
  {
    keywords: ['juice'],
    emoji: '🧃'
  },
  {
    keywords: ['sunflower', 'sunflowers'],
    emoji: '🌻'
  },
  {
    keywords: ['squid', 'squids'],
    emoji: '🦑'
  },
  {
    keywords: ['octopus', 'octopi'],
    emoji: '🐙'
  },
  {
    keywords: ['duck', 'ducks'],
    emoji: '🦆'
  },
  {
    keywords: ['turkey', 'turkeys'],
    emoji: '🦃'
  },
  {
    keywords: ['cricket', 'crickets'],
    emoji: '🦗'
  },
  {
    keywords: ['scoprion', 'scoprions'],
    emoji: '🦂'
  },
  {
    keywords: ['cold', 'freezing'],
    emoji: '❄'
  },
  {
    keywords: ['hot', 'flame', 'fire', 'flaming'],
    emoji: '🔥'
  },
  {
    keywords: ['wheat', 'flour'],
    emoji: '🌾'
  },
  {
    keywords: ['vanilla'],
    emoji: '🌼'
  },
  {
    keywords: ['tspn', 'tbspn', 'tablespoon', 'teaspoon'],
    emoji: '🥄'
  },
  {
    keywords: ['bento box'],
    emoji: '🍱'
  },
];

const convertToEmojis = (string, amountToReturn) => {
  let words = string.toLowerCase().trim().replace(/ /g,"|");
  const regex = new RegExp(`\\b(?:${words})\\b`);

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

export { foodEmojis, convertToEmojis };