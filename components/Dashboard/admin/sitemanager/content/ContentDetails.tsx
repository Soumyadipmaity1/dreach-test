import React from "react";
import { Button } from "@/components/ui/button";

interface Content {
  id: string;
  title: string;
  type: string;
  lastModified: string;
  body: string;
}

interface ContentDetailsProps {
  content: Content;
  onEdit: () => void;
  onBack: () => void;
}

const ContentDetails: React.FC<ContentDetailsProps> = ({ content, onEdit, onBack }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Content Details</h3>
      <div className="mb-4">
        <p><strong>Title:</strong> {content.title}</p>
        <p><strong>Type:</strong> {content.type}</p>
        <p><strong>Last Modified:</strong> {content.lastModified}</p>
        <p><strong>Body:</strong></p>
        <div className="mt-2 p-4 bg-gray-100 rounded">
          {content.body}
        </div>
      </div>
      <div className="space-x-2">
        <Button onClick={onEdit}>Edit</Button>
        <Button variant="outline" onClick={onBack}>Back to List</Button>
      </div>
    </div>
  );
};

export default ContentDetails;
