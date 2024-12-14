import React, { useState } from "react";
import ContentList from "./content/ContentList";
import ContentDetails from "./content/ContentDetails";
import ContentEditor from "./content/ContentEditor";

interface Content {
  id: string;
  title: string;
  type: string;
  lastModified: string;
  body: string;
}

const ContentManagement: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<Content | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Content Management</h2>
      {!selectedContent && <ContentList onSelectContent={setSelectedContent} />}
      {selectedContent && !isEditing && (
        <ContentDetails
          content={selectedContent}
          onEdit={() => setIsEditing(true)}
          onBack={() => setSelectedContent(null)}
        />
      )}
      {selectedContent && isEditing && (
        <ContentEditor
          content={selectedContent}
          onSave={(updatedContent) => {
            setSelectedContent(updatedContent);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default ContentManagement;
