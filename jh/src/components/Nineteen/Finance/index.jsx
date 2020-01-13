import React from "react";
import { HeadingOne, Paragraph, Card, MetricBox } from "../../../shared";
import FinancePieChart from "./FinancePieChart";

const Finance = () => {
  return (
    <>
      <div id="finance" />
      <HeadingOne center mb="2rem" mt="2rem">
        <span role="img" aria-label="related-emoji">
          💰
        </span>{" "}
        Finances{" "}
        <span role="img" aria-label="related-emoji">
          💰
        </span>
      </HeadingOne>
      <Card header title="Expenses">
        <MetricBox
          vertical
          color="rgb(101, 36, 36)"
          title="total spent"
          metric="$52,000"
        />
        <MetricBox
          vertical
          color="rgb(101, 36, 36)"
          title="monthly avg"
          metric="$4,300"
        />
        <MetricBox
          vertical
          color="rgb(101, 36, 36)"
          title="car purchased"
          metric="$10,000"
        />
        <MetricBox
          vertical
          color="rgb(101, 36, 36)"
          title="total change yoy"
          metric="+57%"
        />
        <Paragraph bold center pt={3} mb={0}>
          SPENDING BREAKDOWN
        </Paragraph>
        <FinancePieChart />
      </Card>
    </>
  );
};

export default Finance;
