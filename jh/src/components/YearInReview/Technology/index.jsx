import React from 'react';
import styled from 'styled-components';
import { HeadingOne, Card, Stats, Row } from '../../../shared';
import ig1 from './images/1.jpg';
import ig2 from './images/2.jpg';
import ig3 from './images/3.jpg';
import ig4 from './images/4.jpg';
import ig5 from './images/5.jpg';

const Image = styled.img`
  object-fit: cover;
  display: flex;
  flex-grow: 1;
  width: 384px;
  height: 384px;
`;

const Technology = () => {
  return (
    <>
      <div id="technology" />
      <HeadingOne center mb="2rem" mt="2rem">
        <span role="img" alt="emoji" aria-label="related-emoji">
          💻
        </span>{' '}
        Technology{' '}
        <span role="img" alt="emoji" aria-label="related-emoji">
          💻
        </span>
      </HeadingOne>
      <Card header title="Whatpulse" pt={0}>
        <Stats title="KEYS ⌨️" metric="3,374,383" />
        <Stats title="CLICKS 🖱" metric="2,282,244" />
        <Stats title="DOWNLOADED ⬇️" metric="1.5TB" />
        <Stats title="UPLOADED ⬆️" metric="78.98GB" />
      </Card>
      <Card header title="Github" pt={0}>
        <Stats title="CONTRIBUTIONS" metric="752" />
      </Card>
      <Card header title="Instagram" pt={0}>
        <Row justifyContent="space-between" pl="1rem" pr="1rem" mb="1rem">
          <Stats title="NEW PHOTOS" metric="35" />
          <Stats
            title="LIKES"
            metric="2,375"
            fact="(67.68 avg likes per photo)"
          />
        </Row>
        <Row justifyContent="center" pl="1rem" pr="1rem">
          <Image alt="ig-photo" src={ig1} />
          <Image alt="ig-photo" src={ig4} />
          <Image alt="ig-photo" src={ig2} />
          <Image alt="ig-photo" src={ig5} />
          <Image alt="ig-photo" src={ig3} />
        </Row>
      </Card>
    </>
  );
};

export default Technology;
