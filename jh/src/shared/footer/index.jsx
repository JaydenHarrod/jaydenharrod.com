import React from 'react';
import { TinyText, Anchor } from '../typography';

export const Footer = () => {
  return (
    <TinyText center mb="1rem">
      &copy; Jayden Harrod -{' '}
      <Anchor
        mr="0.3rem"
        rel="noopener"
        target="_blank"
        href="https://youtube.com/jaydenharrod"
      >
        YouTube
      </Anchor>
      <Anchor
        mr="0.3rem"
        rel="noopener"
        target="_blank"
        href="https://instagram.com/jaydenharrod"
      >
        Instagram
      </Anchor>
      <Anchor
        mr="0.3rem"
        rel="noopener"
        target="_blank"
        href="https://twitter.com/jaydenharrod"
      >
        Twitter
      </Anchor>
      <Anchor
        mr="0.3rem"
        rel="noopener"
        target="_blank"
        href="https://github.com/jaydenharrod"
      >
        Github
      </Anchor>
      <Anchor
        mr="0.3rem"
        rel="noopener"
        target="_blank"
        href="https://medium.com/@jaydenharrod"
      >
        Medium
      </Anchor>
      <Anchor
        mr="0.3rem"
        rel="noopener"
        target="_blank"
        href="https://linkedin.com/in/jaydenharrod"
      >
        LinkedIn
      </Anchor>
      <Anchor
        mr="0.3rem"
        rel="noopener"
        target="_blank"
        href="https://facebook.com/harrodjayden"
      >
        Facebook
      </Anchor>
    </TinyText>
  );
};
