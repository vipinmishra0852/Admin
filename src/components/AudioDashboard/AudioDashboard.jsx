import React, { useState } from "react";
import { SignedIn, SignedOut, useUser, SignIn } from "@clerk/clerk-react";
import AuthenticatedLayout from "../AuthenticatedLayout";
import AudioUploader from "./AudioUploader";
import CallList from "./CallList";
import SentimentBarChart from "../SentimentCharts/SentimentBarChart";

const AudioDashboard = () => {
  const [calls, setCalls] = useState([]);
  const { user } = useUser();

  const handleUploadComplete = (newCall) => {
    const callWithUser = {
      ...newCall,
      userId: user.id,
      userEmail: user.primaryEmailAddress?.emailAddress,
      id: generateCallId(), // Use the new function to generate the call ID
    };

    setCalls((prevCalls) => [callWithUser, ...prevCalls]);

    setTimeout(() => {
      setCalls((prevCalls) =>
        prevCalls.map((call) =>
          call.id === callWithUser.id
            ? {
                ...call,
                status: "completed",
                speakers: call.speakers.map((speaker) => ({
                  ...speaker,
                  sentiment: Math.random() > 0.5 ? "positive" : "neutral",
                })),
              }
            : call
        )
      );
    }, 3000);
  };

  const generateCallId = () => {
    const now = new Date();
    const dateString = now.toISOString().replace(/[:-]/g, "").split(".")[0]; // Format YYYYMMDDTHHMMSS
    return `CALL-${dateString}`;
  };

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

  return (
    <>
      <SignedIn>
        <AuthenticatedLayout>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <AudioUploader onUploadComplete={handleUploadComplete} />
            <SentimentBarChart
              calls={calls}
              calculateSentimentSummary={calculateSentimentSummary}
            />
            <CallList calls={calls} />
          </div>
        </AuthenticatedLayout>
      </SignedIn>

      <SignedOut>
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full space-y-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Welcome to Audio Dashboard
            </h2>
            <p className="text-gray-600 mb-6">Please sign in to continue</p>
            <div className="w-full">
              <SignIn />
            </div>
          </div>
        </div>
      </SignedOut>
    </>
  );
};

export default AudioDashboard;
