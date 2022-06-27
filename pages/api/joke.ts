// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { JokeType } from '../../types/joke';
import { getJokeById } from '../../utils/jokes';

export default (req: NextApiRequest, res: NextApiResponse<JokeType | undefined>) => {
  const joke: JokeType | undefined = getJokeById(Number(req.query.id), {
    firstName: req.query.firstName,
    lastName: req.query.lastName,
  });

  res.status(200).json(joke);
};
