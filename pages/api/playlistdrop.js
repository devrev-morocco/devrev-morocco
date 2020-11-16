import { seasons } from '../../data/Seasons.json';

export default function PlayListDropHandler(req, res) {
  let PlayListDrop = {};

  for (const [key, value] of Object.entries(seasons)) {
    PlayListDrop[key] = value[0].videoId;
  }

  res.status(200).json(PlayListDrop);
}
