export const calculateSentimentSummary = (calls) => {
  const summary = {
    Positive: 0,
    Neutral: 0,
    Negative: 0,
  };

  calls.forEach((call) => {
    call.speakers?.forEach((speaker) => {
      if (speaker.sentiment && speaker.sentiment !== "pending") {
        summary[
          speaker.sentiment.charAt(0).toUpperCase() + speaker.sentiment.slice(1)
        ]++;
      }
    });
  });

  return Object.entries(summary).map(([key, value]) => ({
    name: key,
    count: value,
  }));
};

export const getSentimentColor = (sentiment) => {
  switch (sentiment) {
    case "positive":
      return "bg-green-500";
    case "neutral":
      return "bg-yellow-500";
    case "negative":
      return "bg-red-500";
    default:
      return "bg-gray-300";
  }
};
