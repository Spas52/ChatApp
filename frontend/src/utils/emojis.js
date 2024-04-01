export const funEmojis = [
  "🏋️", // Weightlifting
  "⛹️", // Basketball
  "🏸", // Badminton
  "🎱", // Billiards
  "🏀", // Basketball
  "🎳", // Bowling
  "🏓", // Table tennis
  "🏸", // Badminton
  "🏈", // American Football
  "⚽", // Soccer
  "🏒", // Ice Hockey
  "🏏", // Cricket
  "🥋", // Martial Arts
  "🥊", // Boxing
  "⛸", // Ice Skate
  "🏹", // Archery
  "🏆", // Trophy
  "🎮", // Video Game
  "🎯", // Bullseye
  "🎰", // Slot Machine
  "🤸", // Cartwheel
  "🏂", // Snowboarding
  "🎿", // Skiing
  "⛷", // Skiing
  "🛷", // Sled
  "🤺", // Fencing
  "🤼", // Wrestling
  "🏋️‍♀️", // Weightlifting (female)
  "🏋️‍♂️", // Weightlifting (male)
  "⛹️‍♀️", // Basketball (female)
  "⛹️‍♂️", // Basketball (male)
  "🤾", // Handball
  "🧗", // Climbing
  "🧗", // Climbing
  "🐶", // Dog
  "🐱", // Cat
  "🐭", // Mouse
  "🐹", // Hamster
  "🐰", // Rabbit
  "🦊", // Fox
  "🐻", // Bear
  "🐼", // Panda
  "🐨", // Koala
  "🐯", // Tiger
  "🦁", // Lion
  "🐮", // Cow
  "🐷", // Pig
  "🐸", // Frog
  "🐵", // Monkey
  "🐔", // Chicken
  "🐧", // Penguin
  "🦆", // Duck
  "🦅", // Eagle
  "🦉", // Owl
  "🦇", // Bat
  "🦋", // Butterfly
  "🐛", // Bug
  "🐌", // Snail
  "🦕", // Dinosaur
  "🦖", // T-Rex
];

export const getRandomEmoji = () => {
  return funEmojis[Math.floor(Math.random() * funEmojis.length)];
};
