import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: ${(props) => props.theme.border};
`;

const TabItem = styled(NavLink)`
  flex: 1;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${(props) =>
    props.active ? props.theme.textAlternate : props.theme.text}
  background-color: ${(props) =>
    props.active ? props.theme.highlight : props.theme.card};
  border-right: ${(props) => props.theme.border};
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;

  :last-child {
    border-right: none;
  }

  :hover {
    background-color: ${(props) => props.theme.highlight};
    color: ${(props) => props.theme.textAlternate};
  }
`;

const TabBar = ({ tabs, activeTab }) => {
  return (
    <Container>
      {tabs.map((tab) => (
        <TabItem key={tab.key} to={tab.route} active={activeTab === tab.route}>
          {tab.label}
        </TabItem>
      ))}
    </Container>
  );
};

export default TabBar;
