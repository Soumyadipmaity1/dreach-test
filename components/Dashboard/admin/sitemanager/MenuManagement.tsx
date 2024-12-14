import React, { useState } from "react";
import MenuList from "./menu/MenuList";
import MenuDetails from "./menu/MenuDetails";
import MenuEditor from "./menu/MenuEditor";

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

const MenuManagement: React.FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Menu Management</h2>
      {!selectedMenu && <MenuList onSelectMenu={setSelectedMenu} />}
      {selectedMenu && !isEditing && (
        <MenuDetails
          menu={selectedMenu}
          onEdit={() => setIsEditing(true)}
          onBack={() => setSelectedMenu(null)}
        />
      )}
      {selectedMenu && isEditing && (
        <MenuEditor
          menu={selectedMenu}
          onSave={(updatedMenu) => {
            setSelectedMenu(updatedMenu);
            setIsEditing(false);
          }}
          onCancel={() => setIsEditing(false)}
        />
      )}
    </div>
  );
};

export default MenuManagement;
