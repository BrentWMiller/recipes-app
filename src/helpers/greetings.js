const timeGreetings = [
  {
    start: 200,
    end: 500,
    message: '🐥 You\'re an early bird.'
  },
  {
    start: 501,
    end: 1059,
    message: '🥞 Good morning.',
  },
  {
    start: 501,
    end: 1059,
    message: '🥚 Have an egg-cellent day!',
  },
  {
    start: 501,
    end: 1059,
    message: '🥓 What\'s for breakfast?',
  },
  {
    start: 1100,
    end: 1259,
    message: '🍕 Afternoon.'
  },
  {
    start: 1100,
    end: 1259,
    message: '🥗 What\'s for lunch?'
  },
  {
    start: 1300,
    end: 1559,
    message: '🍪 Need a snack?'
  },
  {
    start: 1300,
    end: 1559,
    message: '🍎 Healthy snack?'
  },
  {
    start: 1600,
    end: 2400,
    message: '🍝 Good evening.'
  },
  {
    start: 1600,
    end: 2400,
    message: '🍲 What\'s for dinner?'
  },
  {
    start: 0,
    end: 159,
    message: '😋 Late night snack?'
  },
  {
    start: 0,
    end: 2400,
    message: '🍽 What are we eating?'
  },
  {
    start: 0,
    end: 2400,
    message: '👋 Hey there!'
  },
  {
    start: 0,
    end: 2400,
    day: 5,
    message: '🍟 It’s fry-day!'
  },
  {
    start: 700,
    end: 1200,
    message: '🍩 Donut ever leave.'
  },
  {
    start: 1400,
    end: 2400,
    message: '🍻 You are brew-tiful'
  }
]

const padMinutes = (num, size) => {
  return ('000000000' + num).substr(-size);
}

export const getTimebasedGreeting = () => {
  // Get the time of day
  const today = new Date();
  const dayOfWeek = today.getDay();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const timeString = `${hour}${padMinutes(minute, 2)}`;
  const time = parseInt(timeString);

  // Look for an appropriate greeting
  let greetings = timeGreetings.filter(greeting => {
    const withinTime = time >= greeting.start && time <= greeting.end;
    if ((withinTime && !greeting.day)) {
      return greeting
    }

    // Check for day specific greeting
    if ((withinTime && (greeting.day && greeting.day === dayOfWeek))) {
      return greeting
    }
  });

  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  return greeting.message;
}