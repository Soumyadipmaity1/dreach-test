import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Page {
  id: string;
  title: string;
  slug: string;
  status: "published" | "draft";
  lastModified: string;
  content: string;
}

interface PageListProps {
  onSelectPage: (page: Page) => void;
}

const PageList: React.FC<PageListProps> = ({ onSelectPage }) => {
  const [pages, setPages] = useState<Page[]>([]);

  useEffect(() => {
    // Fetch pages from API
    // This is a mock implementation. Replace with actual API call.
    const fetchPages = async () => {
      const mockPages: Page[] = [
        { id: "1", title: "Home", slug: "/", status: "published", lastModified: "2023-05-01", content: "Welcome to our home page" },
        { id: "2", title: "About Us", slug: "/about", status: "published", lastModified: "2023-04-15", content: "Learn about our company" },
        { id: "3", title: "Contact", slug: "/contact", status: "draft", lastModified: "2023-05-10", content: "Get in touch with us" },
      ];
      setPages(mockPages);
    };

    fetchPages();
  }, []);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Pages</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Slug</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Modified</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {pages.map((page) => (
            <TableRow key={page.id}>
              <TableCell>{page.title}</TableCell>
              <TableCell>{page.slug}</TableCell>
              <TableCell>{page.status}</TableCell>
              <TableCell>{page.lastModified}</TableCell>
              <TableCell>
                <Button onClick={() => onSelectPage(page)}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PageList;
