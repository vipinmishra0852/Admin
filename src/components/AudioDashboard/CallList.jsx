import React from "react";
import CallCard from "./CallCard";

const CallList = ({ calls }) => {
  return (
    <div className="space-y-6">
      {calls.length === 0 ? (
        <div className="text-gray-500">
          No calls available. Upload your first conversation!
        </div>
      ) : (
        calls.map((call) => <CallCard key={call.id} call={call} />)
      )}
    </div>
  );
};

export default CallList;
