import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  description: string;
}

interface CategoryListProps {
  onSelectCategory: (category: Category) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // Fetch categories from API
    // This is a mock implementation. Replace with actual API call.
    const fetchCategories = async () => {
      const mockCategories: Category[] = [
        { id: "1", name: "Technology", description: "All about tech" },
        { id: "2", name: "Health", description: "Health and wellness" },
        { id: "3", name: "Travel", description: "Travel and adventure" },
      ];
      setCategories(mockCategories);
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Categories</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell>{category.name}</TableCell>
              <TableCell>{category.description}</TableCell>
              <TableCell>
                <Button onClick={() => onSelectCategory(category)}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CategoryList;
