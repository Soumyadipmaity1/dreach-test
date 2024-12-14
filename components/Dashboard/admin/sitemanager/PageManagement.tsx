import React, { useState } from "react";
import PageList from "./page/PageList";
import PageDetails from "./page/PageDetails";
import PageEditor from "./page/PageEditor";

interface Page {
  id: string;
  title: string;
  slug: string;
  status: "published" | "draft";
  lastModified: string;
  content: string;
}

const PageManagement: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<Page | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSelectPage = (page: Page) => {
    setSelectedPage(page);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Page Management</h2>
      {!selectedPage && <PageList onSelectPage={handleSelectPage} />}
      {selectedPage && !isEditing && (
        <PageDetails
          page={selectedPage}
          onEdit={() => setIsEditing(true)}
          onBack={() => setSelectedPage(null)}
        />
      )}
      {selectedPage && isEditing && (
        <PageEditor
          page={selectedPage}
          onSave={(updatedPage) => {
            setSelectedPage(updatedPage);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default PageManagement;
