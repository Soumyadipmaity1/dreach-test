import React from "react";
import { Button } from "@/components/ui/button";

interface Category {
  id: string;
  name: string;
  description: string;
}

interface CategoryDetailsProps {
  category: Category;
  onEdit: () => void;
  onBack: () => void;
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({ category, onEdit, onBack }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Category Details</h3>
      <div className="mb-4">
        <p><strong>Name:</strong> {category.name}</p>
        <p><strong>Description:</strong> {category.description}</p>
      </div>
      <div className="space-x-2">
        <Button onClick={onEdit}>Edit</Button>
        <Button variant="outline" onClick={onBack}>Back to List</Button>
      </div>
    </div>
  );
};

export default CategoryDetails;
