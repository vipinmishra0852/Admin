import React from "react";
import SpeakerDetails from "./SpeakerDetails";

const CallCard = ({ call }) => {
  return (
    <div className="p-4 border rounded-lg">
      <h3 className="text-lg font-bold">Call ID: {call.id}</h3>
      <p>{new Date(call.timestamp).toLocaleString()}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {call.speakers.map((speaker) => (
          <SpeakerDetails key={speaker.id} speaker={speaker} callId={call.id} />
        ))}
      </div>
    </div>
  );
};

export default CallCard;
