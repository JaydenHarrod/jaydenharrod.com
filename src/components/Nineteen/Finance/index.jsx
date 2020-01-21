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
              inverse
            />
            <MetricBox
              color="rgb(36, 101, 65)"
              title="F.I.R.E target"
              metric="4.5%"
              inverse
            />
          </Col>
          <Col lg={6} sm={12}>
            <MetricBox
              color="rgb(101, 36, 36)"
              title="expense increase"
              metric="57%"
              inverse
            />
            <MetricBox
              color="rgb(101, 36, 36)"
              title="total spent 2019"
              metric="$52K"
              inverse
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
