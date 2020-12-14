// api/questions/[season]]/[episode]

import _Questions_ from '../../../../data/Questions.json';

export default function ({ query: { season, ep } }, res) {
  const questions = _Questions_[season]?.filter((episode) => {
    return episode.ep === Number(ep);
  })[0];
  res.status(200).json({ season: Number(season), ...questions });

  // handle if ep or season not exist
  // handle if season and ep are char
}
