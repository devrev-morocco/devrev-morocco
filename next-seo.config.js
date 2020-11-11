const title = 'DevRev Morocco';
const description =
  'A weekly live show featuring conversations with great tech minds about software engineering, tech careers, and startups.';

const SEO = {
  title,
  description,
  canonical: 'https://devrev-morocco.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://devrev-morocco.vercel.app/',
    title,
    description,
    images: [
      {
        url: 'https://devrev-morocco.vercel.app/static/images/devrev-bg.png',
        alt: title,
        width: 820,
        height: 312
      }
    ]
  },
  twitter: {
    handle: '@NSBraksa',
    site: '@DevRevMorocco',
    cardType: 'summary_large_image'
  },
  facebook: {
    appId: 357174838817752
  }
};

export default SEO;
