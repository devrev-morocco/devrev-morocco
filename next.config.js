const withOffline = require('next-offline');

module.exports = withOffline({
  generateInDevMode: true,
  reactStrictMode: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    iconSizes: [],
    domains: ['127.0.0.1', 'devrev-morocco.vercel.app', 'devrev.ma'],
    path: '/_next/image',
    loader: 'default'
  },
  workboxOpts: {
    maximumFileSizeToCacheInBytes: 6000000,
    swDest: process.env.NEXT_EXPORT
      ? 'service-worker.js'
      : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /.webp$/,
        handler: 'CacheFirst'
      },
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
          }
        }
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/service-worker.js',
        destination: '/_next/static/service-worker.js'
      }
    ];
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
    }

    return config;
  }
});
