import React, { useState } from "react";
import TagList from "./tag/TagList";
import TagDetails from "./tag/TagDetails";
import TagEditor from "./tag/TagEditor";

interface Tag {
  id: string;
  name: string;
  slug: string;
  count: number;
  description?: string;
}

const TagManagement: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<Tag | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSelectTag = (tag: Tag) => {
    setSelectedTag(tag);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Tag Management</h2>
      {!selectedTag && <TagList onSelectTag={handleSelectTag} />}
      {selectedTag && !isEditing && (
        <TagDetails
          tag={selectedTag}
          onEdit={() => setIsEditing(true)}
          onBack={() => setSelectedTag(null)}
        />
      )}
      {selectedTag && isEditing && (
        <TagEditor
          tag={selectedTag}
          onSave={(updatedTag) => {
            setSelectedTag(updatedTag);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default TagManagement;
