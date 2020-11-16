const title = 'DevRev Morocco';
const description =
  'A weekly live show featuring conversations with great tech minds about software engineering, tech careers, and startups.';

const SEO = {
  title,
  description,
  canonical: 'https://devrev.ma/',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://devrev.ma/',
    title,
    description,
    images: [
      {
        url: 'https://devrev.ma/static/images/devrev-og-image.webp',
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
