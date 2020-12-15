process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    imageSizes: [],
    domains: ['127.0.0.1', 'devrev-morocco.vercel.app', 'devrev.ma'],
    path: '/_next/image',
    loader: 'default'
  }
};
