import React from 'react';
import styled from 'styled-components';
import { Paragraph } from '../../../shared';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  min-width: 17.7%;
  min-height: 10rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.lightGrey};
`;

const ImageBox = styled.div`
  width: 100%;
  height: 7rem;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-bottom-left-radius: none;
  border-bottom-right-radius: none;
  border-bottom: 1px solid ${props => props.theme.lightGrey};
  color: #fff;
  background-size: cover;
  background-position: top center;
  background-image: url(${props => props.src});
  transition: all 0.3s ease-in-out;
`;

const TopCitiesBox = ({ city, src }) => {
  return (
    <Box>
      <ImageBox src={src} />
      <Paragraph center pl="1rem" pr="1rem">
        {city}
      </Paragraph>
    </Box>
  );
};

export default TopCitiesBox;
