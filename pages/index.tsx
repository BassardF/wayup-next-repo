import type { NextApiRequest, NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { JokeType } from '../types/joke';
import getAllJokes from '../utils/jokes';

type Props = {
  jokes: Array<JokeType>;
};

const Home: NextPage<Props> = ({ jokes }) => {
  return (
    <div>
      <Head>
        <title>Wayup NextJS Test Bench 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h3>Wayup NextJS Test Bench 2022</h3>

        {jokes.map((joke: JokeType) => (
          <div className={styles.joke} key={joke.setup}>
            <h4>{joke.setup}</h4>
            <em>{joke.punchline}</em>
          </div>
        ))}
      </main>
    </div>
  );
};

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  // http://localhost:3000/api/jokes
  const jokes: Array<JokeType> = getAllJokes();

  // Pass data to the page via props
  return { props: { jokes } };
}

export default Home;
