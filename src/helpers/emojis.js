const foodEmojis = [
  {
    keyword: 'burger hamburger',
    emoji: '🍔'
  },
  {
    keyword: 'pizza',
    emoji: '🍕'
  },
  {
    keyword: 'meat beef',
    emoji: '🍖'
  },
  {
    keyword: 'lamb',
    emoji: '🥩'
  },
  {
    keyword: 'chicken poultry',
    emoji: '🍗'
  },
  {
    keyword: 'hotdog hot dog',
    emoji: '🌭'
  },
  {
    keyword: 'salt',
    emoji: '🧂'
  },
  {
    keyword: 'egg fried egg',
    emoji: '🍳'
  },
  {
    keyword: 'waffle',
    emoji: '🧇'
  },
  {
    keyword: 'pancake',
    emoji: '🥞'
  },
  {
    keyword: 'butter margarine',
    emoji: '🧈'
  },
  {
    keyword: 'pretzel',
    emoji: '🥨'
  },
  {
    keyword: 'bagel',
    emoji: '🥯'
  },
  {
    keyword: 'cheese',
    emoji: '🧀'
  },
  {
    keyword: 'sandwich',
    emoji: '🥪'
  },
  {
    keyword: 'taco',
    emoji: '🌮'
  },
  {
    keyword: 'burrito',
    emoji: '🌯'
  },
  {
    keyword: 'canned',
    emoji: '🥫'
  },
  {
    keyword: 'dumpling',
    emoji: '🥟'
  },
  {
    keyword: 'cookie fortune',
    emoji: '🥠'
  },
  {
    keyword: 'oyster',
    emoji: '🦪'
  },
  {
    keyword: 'cake moon',
    emoji: '🥮'
  },
  {
    keyword: 'oden',
    emoji: '🍢'
  },
  {
    keyword: 'soup',
    emoji: '🥣'
  },
  {
    keyword: 'cupcake',
    emoji: '🧁'
  },
  {
    keyword: 'honey',
    emoji: '🍯'
  },
  {
    keyword: 'milk',
    emoji: '🥛'
  },
  {
    keyword: 'tea',
    emoji: '🍵'
  },
  {
    keyword: 'mate',
    emoji: '🧉'
  },
  {
    keyword: 'sake',
    emoji: '🍶'
  },
  {
    keyword: 'campagne',
    emoji: '🍾'
  },
  {
    keyword: 'wine cabernet merlot zinfandel syrah shiraz malbec pinot noir sangiovese nebbiolo',
    emoji: '🍷'
  },
  {
    keyword: 'cocktail drink martini',
    emoji: '🍸'
  },
  {
    keyword: 'cocktail drink tropical',
    emoji: '🍹'
  },
  {
    keyword: 'beer',
    emoji: '🍺'
  },
  {
    keyword: 'beer beers',
    emoji: '🍻'
  },
  {
    keyword: 'cocktail drink',
    emoji: '🥃'
  },
  {
    keyword: 'ice',
    emoji: '🧊'
  },
  {
    keyword: 'beer cocktail drink',
    emoji: '🥤'
  },
  {
    keyword: 'falafel',
    emoji: '🧆'
  },
  {
    keyword: 'fish',
    emoji: '🐟'
  },
  {
    keyword: 'fish tropical fish',
    emoji: '🐠'
  },
  {
    keyword: 'fish blowfish',
    emoji: '🐡'
  },
  {
    keyword: 'fish shark',
    emoji: '🦈'
  },
  {
    keyword: 'peanut nut',
    emoji: '🥜'
  },
  {
    keyword: 'rice cooked',
    emoji: '🍚'
  },
  {
    keyword: 'rice cracker',
    emoji: '🍘'
  },
  {
    keyword: 'rice ball',
    emoji: '🍙'
  },
  {
    keyword: 'curry rice',
    emoji: '🍛'
  },
  {
    keyword: 'fishcake',
    emoji: '🍥'
  },
  {
    keyword: 'ramen udon',
    emoji: '🍜'
  },
  {
    keyword: 'spaghetti pasta',
    emoji: '🍝'
  },
  {
    keyword: 'bread',
    emoji: '🍞'
  },
  {
    keyword: 'fries',
    emoji: '🍟'
  },
  {
    keyword: 'sweet potato',
    emoji: '🍠'
  },
  {
    keyword: 'sushi',
    emoji: '🍣'
  },
  {
    keyword: 'shrimp',
    emoji: '🍤'
  },
  {
    keyword: 'doughnut',
    emoji: '🍩'
  },
  {
    keyword: 'cookie',
    emoji: '🍪'
  },
  {
    keyword: 'cake shortcake',
    emoji: '🍰'
  },
  {
    keyword: 'ice cream',
    emoji: '🍨'
  },
  {
    keyword: 'soft serve ice cream',
    emoji: '🍦'
  },
  {
    keyword: 'shaved ice snowcone',
    emoji: '🍧'
  },
  {
    keyword: 'birthday cake',
    emoji: '🎂'
  },
  {
    keyword: 'chocolate',
    emoji: '🍫'
  },
  {
    keyword: 'candy',
    emoji: '🍬'
  },
  {
    keyword: 'lollipop',
    emoji: '🍭'
  },
  {
    keyword: 'custard',
    emoji: '🍮'
  },
  {
    keyword: 'dango',
    emoji: '🍡'
  },
  {
    keyword: 'pie',
    emoji: '🥧'
  },
  {
    keyword: 'tomato',
    emoji: '🍅'
  },
  {
    keyword: 'eggplant',
    emoji: '🍆'
  },
  {
    keyword: 'grape',
    emoji: '🍇'
  },
  {
    keyword: 'melon',
    emoji: '🍈'
  },
  {
    keyword: 'watermelon',
    emoji: '🍉'
  },
  {
    keyword: 'tangerine',
    emoji: '🍊'
  },
  {
    keyword: 'banana',
    emoji: '🍌'
  },
  {
    keyword: 'pineapple',
    emoji: '🍍'
  },
  {
    keyword: 'peach',
    emoji: '🍑'
  },
  {
    keyword: 'cherry cherries',
    emoji: '🍒'
  },
  {
    keyword: 'strawberry strawberries',
    emoji: '🍓'
  },
  {
    keyword: 'kiwi',
    emoji: '🥝'
  },
  {
    keyword: 'lemon',
    emoji: '🍋'
  },
  {
    keyword: 'mango',
    emoji: '🥭'
  },
  {
    keyword: 'apple red apple',
    emoji: '🍎'
  },
  {
    keyword: 'apple green apple',
    emoji: '🍏'
  },
  {
    keyword: 'pear',
    emoji: '🍐'
  },
  {
    keyword: 'corn',
    emoji: '🌽'
  },
  {
    keyword: 'pepper jalapeno spicy hot',
    emoji: '🌶'
  },
  {
    keyword: 'mushroom',
    emoji: '🍄'
  },
  {
    keyword: 'coconut',
    emoji: '🥥'
  },
  {
    keyword: 'soup potluck',
    emoji: '🍲'
  },
  {
    keyword: 'croissant crescent roll',
    emoji: '🥐'
  },
  {
    keyword: 'avocado',
    emoji: '🥑'
  },
  {
    keyword: 'leafy celery',
    emoji: '🥬'
  },
  {
    keyword: 'broccoli',
    emoji: '🥦'
  },
  {
    keyword: 'garlic clove',
    emoji: '🧄'
  },
  {
    keyword: 'onion',
    emoji: '🧅'
  },
  {
    keyword: 'chesnut nut',
    emoji: '🌰'
  },
  {
    keyword: 'cactus',
    emoji: '🌵'
  },
  {
    keyword: 'herb thyme basil mint cilantro dill parsley',
    emoji: '🌿'
  },
  {
    keyword: 'cucumber pickle',
    emoji: '🥒'
  },
  {
    keyword: 'bacon',
    emoji: '🥓'
  },
  {
    keyword: 'potato',
    emoji: '🥔'
  },
  {
    keyword: 'carrot',
    emoji: '🥕'
  },
  {
    keyword: 'baguette',
    emoji: '🥖'
  },
  {
    keyword: 'salad',
    emoji: '🥗'
  },
  {
    keyword: 'flatbread',
    emoji: '🥙'
  },
  {
    keyword: 'egg',
    emoji: '🥚'
  },
  {
    keyword: 'coffee',
    emoji: '☕'
  },
];

const convertToEmojis = (string) => {
  const matches = emojiMatches(string, foodEmojis);

  return matches[0].emoji;
}

// https://stackoverflow.com/questions/35650426/find-the-best-match-on-multiple-keywords-with-regular-expression-in-js
// https://en.wikipedia.org/wiki/Levenshtein_distance

const emojiMatches = (query, array) => {
   var temp = array.map(function(item) {
     item.distance = getEditDistance(query, item.keyword)
     return item;
   })
   temp.sort(function(a,b) {
     if (a.distance < b.distance) return -1
     else if (a.distance > b.distance) return 1
     else return 0;
   })

   return temp;
}

const getEditDistance = function(a, b){
  if(a.length == 0) return b.length; 
  if(b.length == 0) return a.length; 

  var matrix = [];

  // increment along the first column of each row
  var i;
  for(i = 0; i <= b.length; i++){
    matrix[i] = [i];
  }

  // increment each column in the first row
  var j;
  for(j = 0; j <= a.length; j++){
    matrix[0][j] = j;
  }

  // Fill in the rest of the matrix
  for(i = 1; i <= b.length; i++){
    for(j = 1; j <= a.length; j++){
      if(b.charAt(i-1) == a.charAt(j-1)){
        matrix[i][j] = matrix[i-1][j-1];
      } else {
        matrix[i][j] = Math.min(matrix[i-1][j-1] + 1, // substitution
                                Math.min(matrix[i][j-1] + 1, // insertion
                                         matrix[i-1][j] + 1)); // deletion
      }
    }
  }

  return matrix[b.length][a.length];
};

export { convertToEmojis };