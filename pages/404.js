import React from 'react';
import NextLink from 'next/link';
import { PageContainer } from '../styles/Pages/index';
import { ErrorContainer, ReturnBtn } from '../styles/Pages/404';

const Error = () => {
  return (
    <PageContainer>
      <ErrorContainer>
        <span>404 – Unavailable Page</span>
        <p style={{ marginBottom: '20px', color: '#888' }}>
          Why show a generic 404 when I can make it sound mysterious? It seems
          you&apos;ve found something that used to exist, or you spelled
          something wrong. Can you double check that URL?
        </p>
        <ReturnBtn>
          <NextLink href="/" passHref>
            <a>Return Home</a>
          </NextLink>
        </ReturnBtn>
      </ErrorContainer>
    </PageContainer>
  );
};

export default Error;
