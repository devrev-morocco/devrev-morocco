import { seasons } from '../../data/Seasons.json';

export default function playlistKeysHandler(req, res) {
  let PlayListDrop = {};

  for (const [key, value] of Object.entries(seasons)) {
    PlayListDrop[key] = value[0].stringUrl;
  }

  res.status(200).json(PlayListDrop);
}
