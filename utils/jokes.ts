import { JokeType } from '../types/joke';

const jokes: Array<JokeType> = [
  {
    id: 1,
    setup: 'Why did two 4s skip dinner?',
    punchline: 'Because they already 8!',
  },
  {
    id: 2,
    setup: 'What do you get when you cross a snail with a porcupine?',
    punchline: 'A slowpoke!',
  },
  {
    id: 3,
    setup: 'What do you call an elephant that doesn’t matter?',
    punchline: 'An irrelephant!',
  },
  {
    id: 4,
    setup: 'What kind of tree can fit in one hand?',
    punchline: 'A palm tree!',
  },
  {
    id: 5,
    setup: 'Why do bees have sticky hair?',
    punchline: 'They use honeycombs.',
  },
  {
    id: 6,
    setup: 'What do you get when you cross a rabbit with shellfish?',
    punchline: 'An oyster bunny!',
  },
  {
    id: 7,
    setup: 'Did you hear about the rancher who had 97 cows in his field?',
    punchline: 'When he rounded them up, he had 100!',
  },
];

export const getJokeById = (
  id: number,
  author?: { firstName: string | string[]; lastName: string | string[] }
): JokeType | undefined => {
  let joke: JokeType | undefined = jokes.find((joke) => joke?.id === id);

  if (joke && author) {
    joke = { ...joke, author: `${author.firstName} ${author.lastName}` };
  }

  return joke;
};

export const getAllJokes = () => jokes;

export default getAllJokes;
