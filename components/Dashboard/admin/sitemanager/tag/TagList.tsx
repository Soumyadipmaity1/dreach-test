import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Tag {
  id: string;
  name: string;
  slug: string;
  count: number;
}

interface TagListProps {
  onSelectTag: (tag: Tag) => void;
}

const TagList: React.FC<TagListProps> = ({ onSelectTag }) => {
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    // Fetch tags from API
    // This is a mock implementation. Replace with actual API call.
    const fetchTags = async () => {
      const mockTags: Tag[] = [
        { id: "1", name: "Technology", slug: "technology", count: 15 },
        { id: "2", name: "Health", slug: "health", count: 8 },
        { id: "3", name: "Travel", slug: "travel", count: 12 },
      ];
      setTags(mockTags);
    };

    fetchTags();
  }, []);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Tags</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Count</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tags.map((tag) => (
            <TableRow key={tag.id}>
              <TableCell>{tag.name}</TableCell>
              <TableCell>{tag.slug}</TableCell>
              <TableCell>{tag.count}</TableCell>
              <TableCell>
                <Button onClick={() => onSelectTag(tag)}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TagList;
