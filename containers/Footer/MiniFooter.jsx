import React from 'react';
import {
  Mini_Footer,
  Mini_Footer_wrapper,
  Mini_Footer_info,
  Mini_Footer_Separator
} from './styles';
import Link from 'next/link';

const MiniFooter = () => {
  return (
    <Mini_Footer as="footer">
      <Mini_Footer_wrapper>
        <Mini_Footer_info as="p">&#169; DevRev Morocco 2020</Mini_Footer_info>
        <Mini_Footer_info>
          <Mini_Footer_info isLink as="p">
            <Link href="https://github.com/gemography/devrev-morocco" passHref>
              <a rel="noreferrer" target="_blank">
                Sourced on GitHub
              </a>
            </Link>
          </Mini_Footer_info>
          <Mini_Footer_Separator></Mini_Footer_Separator>
          <Mini_Footer_info isLink as="p">
            <Link href="https://www.gemography.com/" passHref>
              <a rel="noreferrer" target="_blank">
                Powered by Gemography
              </a>
            </Link>
          </Mini_Footer_info>
          <Mini_Footer_Separator></Mini_Footer_Separator>
          <Mini_Footer_info isLink as="p">
            <Link
              href="https://www.linkedin.com/in/larbi-sahli-4a08671b0/"
              passHref
            >
              <a rel="noreferrer" target="_blank">
                Created by Larbi Sahli
              </a>
            </Link>
          </Mini_Footer_info>
        </Mini_Footer_info>
      </Mini_Footer_wrapper>
    </Mini_Footer>
  );
};

export default MiniFooter;
