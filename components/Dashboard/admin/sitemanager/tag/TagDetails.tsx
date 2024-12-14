import React from "react";
import { Button } from "@/components/ui/button";

interface Tag {
  id: string;
  name: string;
  slug: string;
  count: number;
  description?: string;
}

interface TagDetailsProps {
  tag: Tag;
  onEdit: () => void;
  onBack: () => void;
}

const TagDetails: React.FC<TagDetailsProps> = ({ tag, onEdit, onBack }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Tag Details: {tag.name}</h3>
      <div className="mb-4">
        <p><strong>Slug:</strong> {tag.slug}</p>
        <p><strong>Count:</strong> {tag.count}</p>
        {tag.description && (
          <div>
            <strong>Description:</strong>
            <p>{tag.description}</p>
          </div>
        )}
      </div>
      <div className="space-x-2">
        <Button onClick={onEdit}>Edit</Button>
        <Button variant="outline" onClick={onBack}>Back to List</Button>
      </div>
    </div>
  );
};

export default TagDetails;
