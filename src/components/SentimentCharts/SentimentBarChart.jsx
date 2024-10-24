import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const SentimentBarChart = ({ calls }) => {
  const calculateSentimentSummary = () => {
    const summary = {
      Positive: 0,
      Neutral: 0,
      Negative: 0,
    };

    calls.forEach((call) => {
      call.speakers?.forEach((speaker) => {
        if (speaker.sentiment) {
          summary[
            speaker.sentiment.charAt(0).toUpperCase() +
              speaker.sentiment.slice(1)
          ]++;
        }
      });
    });

    return Object.entries(summary).map(([key, value]) => ({
      name: key,
      count: value,
    }));
  };

  const data = calculateSentimentSummary();

  return (
    <div className="h-64">
      <BarChart width={600} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#4f46e5" />
      </BarChart>
    </div>
  );
};

export default SentimentBarChart;
