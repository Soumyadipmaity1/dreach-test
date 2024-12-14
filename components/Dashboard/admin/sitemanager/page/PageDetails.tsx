import React from "react";
import { Button } from "@/components/ui/button";

interface Page {
  id: string;
  title: string;
  slug: string;
  status: "published" | "draft";
  lastModified: string;
  content: string;
}

interface PageDetailsProps {
  page: Page;
  onEdit: () => void;
  onBack: () => void;
}

const PageDetails: React.FC<PageDetailsProps> = ({ page, onEdit, onBack }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Page Details: {page.title}</h3>
      <div className="mb-4">
        <p><strong>Slug:</strong> {page.slug}</p>
        <p><strong>Status:</strong> {page.status}</p>
        <p><strong>Last Modified:</strong> {page.lastModified}</p>
        <div className="mt-4">
          <h4 className="font-semibold">Content:</h4>
          <div className="mt-2 p-4 bg-gray-100 rounded">
            {page.content}
          </div>
        </div>
      </div>
      <div className="space-x-2">
        <Button onClick={onEdit}>Edit</Button>
        <Button variant="outline" onClick={onBack}>Back to List</Button>
      </div>
    </div>
  );
};

export default PageDetails;
