import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface MediaUploadProps {
  onUploadComplete: (newMedia: any) => void;
  onCancel: () => void;
}

const MediaUpload: React.FC<MediaUploadProps> = ({ onUploadComplete, onCancel }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    // Here you would typically upload the file to your server or cloud storage
    // This is a mock implementation. Replace with actual API call.
    const mockUpload = async () => {
      return {
        id: Date.now().toString(),
        name: file.name,
        type: file.type,
        size: `${(file.size / 1024).toFixed(2)} KB`,
        uploadDate: new Date().toISOString().split('T')[0],
        url: URL.createObjectURL(file),
      };
    };

    const uploadedMedia = await mockUpload();
    onUploadComplete(uploadedMedia);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">Upload Media</h3>
      <div>
        <Input
          type="file"
          onChange={handleFileChange}
          accept="image/*,video/*,application/pdf"
        />
      </div>
      <div className="space-x-2">
        <Button type="submit" disabled={!file}>Upload</Button>
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
      </div>
    </form>
  );
};

export default MediaUpload;
