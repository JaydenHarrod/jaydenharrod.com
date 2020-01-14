import styled from 'styled-components';
import { space } from 'styled-system';
import { Row as RFRow, Col as RFCol } from 'react-flexa';

export const Container = styled.div`
  display: block;
  max-width: 720px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const Row = styled(RFRow)`
  ${space};
`;

export const Col = styled(RFCol)`
  ${space};
`;
