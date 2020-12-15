import _Questions_ from '../../../../data/Questions.json';

function isNumber(n) {
  return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
}

export default function ({ query: { season, ep } }, res) {
  const isValidNumber = !(isNumber(season) && isNumber(ep));
  if (isValidNumber)
    return res.status(400).json({ season, ep, error: 'Enter a valid number' });
  const questions = _Questions_[season]?.filter((episode) => {
    return episode.ep === Number(ep);
  })[0];
  if (questions === undefined)
    return res
      .status(404)
      .json({ season, ep, error: 'The requested resource was not found' });
  res.status(200).json({ season: Number(season), ...questions });
}
