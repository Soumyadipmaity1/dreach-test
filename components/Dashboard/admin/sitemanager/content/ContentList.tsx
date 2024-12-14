import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Content {
  id: string;
  title: string;
  type: string;
  lastModified: string;
  body: string; // Add this line
}

interface ContentListProps {
  onSelectContent: (content: Content) => void;
}

const ContentList: React.FC<ContentListProps> = ({ onSelectContent }) => {
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    // Fetch contents from API
    // This is a mock implementation. Replace with actual API call.
    const fetchContents = async () => {
      const mockContents: Content[] = [
        { id: "1", title: "Welcome Post", type: "Blog Post", lastModified: "2023-05-01", body: "Welcome to our blog!" },
        { id: "2", title: "About Us", type: "Page", lastModified: "2023-04-15", body: "Learn about our company." },
        { id: "3", title: "Latest News", type: "News Article", lastModified: "2023-05-10", body: "Check out our latest news." },
      ];
      setContents(mockContents);
    };

    fetchContents();
  }, []);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Content List</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Last Modified</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contents.map((content) => (
            <TableRow key={content.id}>
              <TableCell>{content.title}</TableCell>
              <TableCell>{content.type}</TableCell>
              <TableCell>{content.lastModified}</TableCell>
              <TableCell>
                <Button onClick={() => onSelectContent(content)}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ContentList;
