import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Media {
  id: string;
  name: string;
  type: string;
  size: string;
  uploadDate: string;
  url: string;
}

interface MediaLibraryProps {
  onSelectMedia: (media: Media) => void;
}

const MediaLibrary: React.FC<MediaLibraryProps> = ({ onSelectMedia }) => {
  const [mediaItems, setMediaItems] = useState<Media[]>([]);

  useEffect(() => {
    // Fetch media items from API
    // This is a mock implementation. Replace with actual API call.
    const fetchMediaItems = async () => {
      const mockMediaItems: Media[] = [
        { id: "1", name: "logo.png", type: "image/png", size: "150 KB", uploadDate: "2023-05-01", url: "/images/logo.png" },
        { id: "2", name: "intro.mp4", type: "video/mp4", size: "5 MB", uploadDate: "2023-04-15", url: "/videos/intro.mp4" },
        { id: "3", name: "document.pdf", type: "application/pdf", size: "2 MB", uploadDate: "2023-05-10", url: "/documents/document.pdf" },
      ];
      setMediaItems(mockMediaItems);
    };

    fetchMediaItems();
  }, []);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Media Library</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Size</TableHead>
            <TableHead>Upload Date</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mediaItems.map((media) => (
            <TableRow key={media.id}>
              <TableCell>{media.name}</TableCell>
              <TableCell>{media.type}</TableCell>
              <TableCell>{media.size}</TableCell>
              <TableCell>{media.uploadDate}</TableCell>
              <TableCell>
                <Button onClick={() => onSelectMedia(media)}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MediaLibrary;
