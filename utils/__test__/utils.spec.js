/* eslint-disable no-undef */
import { convertYouTubeDuration } from '../';

describe('Convert-YouTube-Duration', () => {
  test.each([
    ['PT23H34M25S', '23:34:25'],
    ['PT2H34M25S', '02:34:25'],
    ['PT4M2S', '00:04:02'],
    ['PT4M', '00:04:00'],
    ['PT15M33S', '00:15:33'],
    ['PT33S', '00:00:33'],
    ['PT3S', '00:00:03'],
    [undefined, '00:00:00']
  ])(`Should convert (%s) `, (duration, expected) => {
    expect(convertYouTubeDuration(duration)).toBe(expected);
    expect(convertYouTubeDuration(duration)).toEqual(expect.any(String));
  });
});
