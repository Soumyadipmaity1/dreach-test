import React, { useState } from "react";
import CategoryList from "./category/CategoryList";
import CategoryDetails from "./category/CategoryDetails";
import CategoryEditor from "./category/CategoryEditor";

interface Category {
  id: string;
  name: string;
  description: string;
}

const CategoryManagement: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Category Management</h2>
      {!selectedCategory && <CategoryList onSelectCategory={setSelectedCategory} />}
      {selectedCategory && !isEditing && (
        <CategoryDetails
          category={selectedCategory}
          onEdit={() => setIsEditing(true)}
          onBack={() => setSelectedCategory(null)}
        />
      )}
      {selectedCategory && isEditing && (
        <CategoryEditor
          category={selectedCategory}
          onSave={(updatedCategory) => {
            setSelectedCategory(updatedCategory);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default CategoryManagement;
