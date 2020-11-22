const fs = require('fs');
const prettier = require('prettier');
const { seasons } = require('../data/Seasons.json');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');

  const PlayListMap = () => {
    const UrlMap = [];
    for (let season in seasons) {
      for (let i in seasons[season]) {
        UrlMap.push(
          `<url>
             <loc>${`https://devrev.ma/playlist/${season}/${seasons[season][i].stringUrl}`}</loc>
           </url>`
        );
      }
    }
    return UrlMap;
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
