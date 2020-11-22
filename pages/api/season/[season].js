import { seasons } from '../../../data/Seasons.json';

export default function seasonsHandler({ query: { season } }, res) {
  res.status(200).json({ season, episodes: seasons[season] });
}
