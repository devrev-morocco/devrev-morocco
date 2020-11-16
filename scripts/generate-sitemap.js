const fs = require('fs');
const prettier = require('prettier');
const { seasons } = require('../data/Seasons.json');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const PlayListMap = () => {
    const Arr = [];
    for (let key in seasons) {
      for (let i in seasons[key]) {
        Arr.push(
          `<url>
            <loc>${`https://devrev.ma/playlist/${key}?v=${seasons[key][i].videoId}`}</loc>
          </url>`
        );
      }
    }
    return Arr;
  };

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://devrev.ma/</loc>
        </url>
        <url>
          <loc>https://devrev.ma/about</loc>
        </url>
            ${PlayListMap().join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();

// This file runs only on build time.
