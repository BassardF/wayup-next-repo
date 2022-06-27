// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { JokeType } from '../../types/joke';
import { getAllJokes } from '../../utils/jokes';

export default (req: NextApiRequest, res: NextApiResponse<Array<JokeType>>) => {
  const jokes = getAllJokes();

  res.status(200).json(jokes);
};
