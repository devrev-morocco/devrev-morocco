import React from 'react';
import NextLink from 'next/link';
import { PageContainer } from '../styles/Pages/index';

const Error = () => {
  return (
    <PageContainer style={{ margin: '100px' }}>
      <div style={{ fontWeight: 'bold' }}>404 – Unavailable Page</div>
      <p style={{ marginBottom: '20px' }}>
        Why show a generic 404 when I can make it sound mysterious? It seems
        you&apos;ve found something that used to exist, or you spelled something
        wrong. Can you double check that URL?
      </p>
      <NextLink href="/" passHref>
        <a
          style={{
            fontWeight: 'bold',
            fontSize: '0.9em',
            border: '1px solid #333',
            padding: '5px',
            borderRadius: '2px'
          }}
        >
          Return Home
        </a>
      </NextLink>
    </PageContainer>
  );
};

export default Error;
