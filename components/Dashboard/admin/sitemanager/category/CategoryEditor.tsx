import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Category {
  id: string;
  name: string;
  description: string;
}

interface CategoryEditorProps {
  category: Category;
  onSave: (updatedCategory: Category) => void;
  onCancel: () => void;
}

const CategoryEditor: React.FC<CategoryEditorProps> = ({ category, onSave, onCancel }) => {
  const [name, setName] = useState(category.name);
  const [description, setDescription] = useState(category.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...category, name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold mb-2">Edit Category</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
          />
        </div>
        <div className="space-x-2">
          <Button type="submit">Save</Button>
          <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
        </div>
      </div>
    </form>
  );
};

export default CategoryEditor;
