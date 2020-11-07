const fs = require('fs');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = [];
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>https://devrev-morocco.vercel.app/</loc>
        </url>
        <url>
          <loc>https://devrev-morocco.vercel.app/playlist?list=WL</loc>
        </url>
        <url>
          <loc>https://devrev-morocco.vercel.app/playlist?list=ALL</loc>
        </url>
            ${pages
              .map((page) => {
                return `
                <url>
                    <loc>${`https://devrev-morocco.vercel.app/${page}`}</loc>
                </url>
              `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();

// This file runs only on build time.
