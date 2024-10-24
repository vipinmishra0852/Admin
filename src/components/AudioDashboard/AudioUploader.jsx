import React, { useState } from "react";
import { Upload } from "lucide-react";

const AudioUploader = ({ onUploadComplete }) => {
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = (e) => {
    setUploading(true);

    // Mock API call simulation
    setTimeout(() => {
      const uploadedCall = {
        id: `CALL${Date.now()}`,
        timestamp: Date.now(),
        speakers: [
          { id: 1, sentiment: "pending", audioUrl: "#", transcriptionUrl: "#" },
          { id: 2, sentiment: "pending", audioUrl: "#", transcriptionUrl: "#" },
        ],
      };
      setUploading(false);
      onUploadComplete(uploadedCall);
    }, 2000);
  };

  return (
    <div className="p-4 border rounded-lg bg-white shadow">
      <input
        type="file"
        accept="audio/*"
        onChange={handleFileUpload}
        className="mb-4"
      />
      <button className="flex items-center justify-center bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        <Upload className="mr-2 h-4 w-4" />
        {uploading ? "Uploading..." : "Upload Audio"}
      </button>
    </div>
  );
};

export default AudioUploader;
