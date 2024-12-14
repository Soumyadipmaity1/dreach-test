import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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

interface MenuEditorProps {
  menu: Menu;
  onSave: (updatedMenu: Menu) => void;
  onCancel: () => void;
}

const MenuEditor: React.FC<MenuEditorProps> = ({ menu, onSave, onCancel }) => {
  const [name, setName] = useState(menu.name);
  const [items, setItems] = useState<MenuItem[]>(menu.items);

  const handleAddItem = () => {
    const newItem: MenuItem = {
      id: Date.now().toString(),
      name: "",
      url: "",
      parentId: null,
    };
    setItems([...items, newItem]);
  };

  const handleUpdateItem = (index: number, field: keyof MenuItem, value: string | null) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setItems(updatedItems);
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...menu, name, items });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">Edit Menu: {menu.name}</h3>
      <div>
        <label htmlFor="menuName" className="block text-sm font-medium text-gray-700">Menu Name</label>
        <Input
          id="menuName"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <h4 className="font-semibold">Menu Items:</h4>
        {items.map((item, index) => (
          <div key={item.id} className="flex space-x-2 mb-2">
            <Input
              type="text"
              value={item.name}
              onChange={(e) => handleUpdateItem(index, "name", e.target.value)}
              placeholder="Item Name"
            />
            <Input
              type="text"
              value={item.url}
              onChange={(e) => handleUpdateItem(index, "url", e.target.value)}
              placeholder="URL"
            />
            <select
              value={item.parentId || ""}
              onChange={(e) => handleUpdateItem(index, "parentId", e.target.value || null)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option value="">No Parent</option>
              {items.filter((i) => i.id !== item.id).map((i) => (
                <option key={i.id} value={i.id}>{i.name}</option>
              ))}
            </select>
            <Button type="button" onClick={() => handleRemoveItem(index)}>Remove</Button>
          </div>
        ))}
        <Button type="button" onClick={handleAddItem}>Add Item</Button>
      </div>
      <div className="space-x-2">
        <Button type="submit">Save</Button>
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
      </div>
    </form>
  );
};

export default MenuEditor;
