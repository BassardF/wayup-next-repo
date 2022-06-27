import type { NextApiRequest, NextPage } from 'next';

import { JokeType } from '../../types/joke';
import { getJokeById } from '../../utils/jokes';

type Props = {
  joke: JokeType;
};

const JokeDetail: NextPage<Props> = ({ joke }) => {
  return <div>{JSON.stringify(joke)}</div>;
};

export async function getServerSideProps({
  req,
  params,
  query,
}: {
  req: NextApiRequest;
  params: { id: number };
  query: { firstName: string; lastName: string };
}) {
  // http://localhost:3000/api/joke?id=1&firstName=kevin&lastName=shreve
  const joke: JokeType | undefined = getJokeById(Number(params.id));

  // Pass data to the page via props
  return { props: { joke } };
}

export default JokeDetail;
