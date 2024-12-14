import React from "react";
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: string;
  name: string;
  url: string;
  parentId: string | null;
}

interface Menu {
  id: string;
  name: string;
  items: MenuItem[];
}

interface MenuDetailsProps {
  menu: Menu;
  onEdit: () => void;
  onBack: () => void;
}

const MenuDetails: React.FC<MenuDetailsProps> = ({ menu, onEdit, onBack }) => {
  const renderMenuItems = (items: MenuItem[], parentId: string | null = null, level: number = 0) => {
    return items
      .filter((item) => item.parentId === parentId)
      .map((item) => (
        <div key={item.id} style={{ marginLeft: `${level * 20}px` }}>
          <p>
            {item.name} - {item.url}
          </p>
          {renderMenuItems(items, item.id, level + 1)}
        </div>
      ));
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Menu Details: {menu.name}</h3>
      <div className="mb-4">
        <h4 className="font-semibold">Menu Items:</h4>
        {renderMenuItems(menu.items)}
      </div>
      <div className="space-x-2">
        <Button onClick={onEdit}>Edit</Button>
        <Button variant="outline" onClick={onBack}>Back to List</Button>
      </div>
    </div>
  );
};

export default MenuDetails;
