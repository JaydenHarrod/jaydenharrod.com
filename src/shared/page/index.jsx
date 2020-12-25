import React from "react";
import { Card } from "../card";
import { Row, Col } from "../layout";

export const Page = ({ children }) => {
  return (
    <Card pl="1rem" pr="1rem">
      <Row pl="1rem" pr="1rem">
        <Col xs={12} md={12}>
          {children}
        </Col>
      </Row>
    </Card>
  );
};

export default Page;
