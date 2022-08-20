import { NextApiRequest, NextApiResponse } from 'next';
import mongodb from '../../lib/mongodb';
import Partner from '../../models/partner.model';

export default async function getPosts(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    await mongodb.connect();
    const partners = await Partner.find();
    res.json(partners);
  } catch (err) {
    res.status(500).send('error');
  }
}
