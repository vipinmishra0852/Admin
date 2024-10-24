import React from "react";
import { Play, Download, Volume2 } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { getSentimentColor } from "../../utils/sentimentUtils";

const SpeakerDetails = ({ speaker }) => {
  const handlePlayAudio = () => {
    // Logic to handle playing audio
  };

  return (
    <div className="p-4 bg-gray-50 border rounded-lg">
      <h4>Speaker {speaker.id}</h4>
      <Button onClick={handlePlayAudio}>
        {speaker.isPlaying ? <Volume2 /> : <Play />} Play Audio
      </Button>
      <Badge className={getSentimentColor(speaker.sentiment)}>
        {speaker.sentiment}
      </Badge>
      <Button onClick={() => window.open(speaker.transcriptionUrl)}>
        <Download className="mr-2 h-4 w-4" />
        Download Transcription
      </Button>
    </div>
  );
};

export default SpeakerDetails;
