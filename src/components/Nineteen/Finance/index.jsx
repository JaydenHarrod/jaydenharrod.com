import React from "react";
import {
  HeadingOne,
  Paragraph,
  Card,
  MetricBox,
  Row,
  Col
} from "../../../shared";
import FinancePieChart from "./FinancePieChart";

const Finance = () => {
  return (
    <>
      <div id="finance" />
      <HeadingOne center mb="2rem" mt="2rem">
        Finance
      </HeadingOne>
      <Card header title="Expenses">
        <Row>
          <Col lg={6} sm={12}>
            <MetricBox
              color="rgb(36, 101, 65)"
              title="income increase"
              metric="38%"
            />
            <MetricBox
              color="rgb(36, 101, 65)"
              title="car purchase"
              metric="$10K"
            />
          </Col>
          <Col lg={6} sm={12}>
            <MetricBox
              color="rgb(101, 36, 36)"
              title="total spent"
              metric="$52K"
            />
            <MetricBox
              color="rgb(101, 36, 36)"
              title="yoy spent"
              metric="+57%"
            />
          </Col>
        </Row>
        <Paragraph bold center pt={3} mb={0}>
          SPENDING BREAKDOWN
        </Paragraph>
        <FinancePieChart />
      </Card>
    </>
  );
};

export default Finance;
