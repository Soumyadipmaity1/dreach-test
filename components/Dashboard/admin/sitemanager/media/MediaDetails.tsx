import React from "react";
import { Button } from "@/components/ui/button";

interface Media {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadDate: string;
  url: string;
}

interface MediaDetailsProps {
  media: Media;
  onBack: () => void;
}

const MediaDetails: React.FC<MediaDetailsProps> = ({ media, onBack }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Media Details</h3>
      <div className="mb-4">
        <p><strong>Name:</strong> {media.name}</p>
        <p><strong>Type:</strong> {media.type}</p>
        <p><strong>Size:</strong> {media.size}</p>
        <p><strong>Upload Date:</strong> {media.uploadDate}</p>
        <div className="mt-4">
          {media.type.startsWith('image/') ? (
            <img src={media.url} alt={media.name} className="max-w-full h-auto" />
          ) : media.type.startsWith('video/') ? (
            <video src={media.url} controls className="max-w-full h-auto" />
          ) : (
            <a href={media.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              View File
            </a>
          )}
        </div>
      </div>
      <Button variant="outline" onClick={onBack}>Back to Library</Button>
    </div>
  );
};

export default MediaDetails;
