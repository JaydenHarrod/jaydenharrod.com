import React from 'react';
import styled from 'styled-components';
import { Paragraph, HeadingOne } from '../typography';

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  align-items: center;
  margin-bottom: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
  padding: 1rem;
  color: #fff;
  box-shadow: 0px 2px 4px ${props => props.theme.grey};
  background-color: ${props => props.theme.info};
  background-position: center center;
  background-blend-mode: multiply;
  background-size: cover;
  transition: all 0.3s ease-in-out;
  :hover {
    transform: scale(1.05);
  }
`;

const MetricBox = ({ title, metric }) => {
  return (
    <Box>
      <Paragraph bold mt={0} mb={0} mr="1rem">
        {title}
      </Paragraph>
      <HeadingOne mt={0}>{metric}</HeadingOne>
    </Box>
  );
};

export default MetricBox;
