import React, { useState } from "react";
import MediaLibrary from "./media/MediaLibrary";
import MediaDetails from "./media/MediaDetails";
import MediaUpload from "./media/MediaUpload";

interface Media {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadDate: string;
  url: string;
}

const MediaManagement: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Media Management</h2>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => setIsUploading(true)}
      >
        Upload New Media
      </button>
      {isUploading && (
        <MediaUpload
          onUploadComplete={(newMedia) => {
            setIsUploading(false);
            // Add the new media to the library
            // You might want to update your media list here
          }}
          onCancel={() => setIsUploading(false)}
        />
      )}
      {!selectedMedia && <MediaLibrary onSelectMedia={setSelectedMedia} />}
      {selectedMedia && (
        <MediaDetails
          media={selectedMedia}
          onBack={() => setSelectedMedia(null)}
        />
      )}
    </div>
  );
};

export default MediaManagement;
