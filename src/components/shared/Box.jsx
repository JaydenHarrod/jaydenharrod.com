import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Col1 } from './Layout';
import '../../styles/components/shared/box.scss';

const DisableText = styled.div`
`;
export const Box = props => (
  <Col1>
    <div className="disable-text">
      <h3 className="text-overlay">{props.title}</h3>
      {props.link ? (
        <a href={props.path} target="_blank" rel="noopener noreferrer">
          <img
            src={props.src}
            className="box"
            alt={props.alt}
            aria-label={props.alt}
          />
        </a>
      ) : (
        <Link to={props.path}>
          <img
            src={props.src}
            className="box"
            alt={props.alt}
            aria-label={props.alt}
          />
        </Link>
      )}
    </div>
  </Col1>
);

export default Box;
