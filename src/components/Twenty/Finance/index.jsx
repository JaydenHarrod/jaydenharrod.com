import React from "react";
import {
  HeadingOne,
  Paragraph,
  Card,
  MetricBox,
  Row,
  Col,
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
        <Row justifyContent="center">
          <Col lg={6} sm={12}>
            <MetricBox
              color={(props) => props.theme.success}
              title="income"
              metric="+74%"
            />
            <MetricBox
              color={(props) => props.theme.success}
              title="F.I.R.E target"
              metric="9%"
            />
          </Col>
          <Col lg={6} sm={12}>
            <MetricBox
              color={(props) => props.theme.danger}
              title="spending"
              metric="-12%"
            />
            <MetricBox
              color={(props) => props.theme.danger}
              title="total expenses"
              metric="$44K"
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
