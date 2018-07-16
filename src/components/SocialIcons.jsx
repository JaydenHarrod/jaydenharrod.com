import React from 'react';
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

const Container = styled.div`
  span {
    padding-right: 8px;
  }
`;
const IconAlignment = { height: 18, width: 18 };
const SocialIcons = () => {
  return (
    <Container>
      <span>
        <SocialIcon
          url="https://twitter.com/jaydenharrod"
          rel="noopener noreferrer"
          aria-label="Jayden on Twitter"
          style={IconAlignment}
          color="black"
        />
      </span>
      <span>
        <SocialIcon
          url="https://medium.com/@jaydenharrod"
          rel="noopener noreferrer"
          aria-label="Jayden on Medium"
          style={IconAlignment}
          color="black"
        />
      </span>
      <span>
        <SocialIcon
          url="https://github.com/jaydenharrod"
          rel="noopener noreferrer"
          aria-label="Jayden on GitHub"
          style={IconAlignment}
          color="black"
        />
      </span>
      <span>
        <SocialIcon
          url="https://instagram.com/jaydenharrod"
          rel="noopener noreferrer"
          aria-label="Jayden on Instagram"
          style={IconAlignment}
          color="black"
        />
      </span>
      <span>
        <SocialIcon
          url="https://linkedin.com/in/jaydenharrod"
          rel="noopener noreferrer"
          aria-label="Jayden on LinkedIn"
          style={IconAlignment}
          color="black"
        />
      </span>
      <span>
        <SocialIcon
          url="https://facebook.com/harrodjayden"
          rel="noopener noreferrer"
          aria-label="Jayden on Facebook"
          style={IconAlignment}
          color="black"
        />
      </span>
      <span>
        <SocialIcon
          url="mailto:harrod.jayden@gmail.com"
          rel="noopener noreferrer"
          aria-label="Contact Jayden via Email"
          style={IconAlignment}
          color="black"
        />
      </span>
    </Container>
  );
};

export default SocialIcons;
