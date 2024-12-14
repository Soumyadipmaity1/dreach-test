import React, { useState, useEffect } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
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

interface MenuListProps {
  onSelectMenu: (menu: Menu) => void;
}

const MenuList: React.FC<MenuListProps> = ({ onSelectMenu }) => {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    // Fetch menus from API
    // This is a mock implementation. Replace with actual API call.
    const fetchMenus = async () => {
      const mockMenus: Menu[] = [
        {
          id: "1",
          name: "Main Navigation",
          items: [
            { id: "1", name: "Home", url: "/", parentId: null },
            { id: "2", name: "About", url: "/about", parentId: null },
            { id: "3", name: "Services", url: "/services", parentId: null },
          ],
        },
        {
          id: "2",
          name: "Footer Menu",
          items: [
            { id: "4", name: "Privacy Policy", url: "/privacy", parentId: null },
            { id: "5", name: "Terms of Service", url: "/terms", parentId: null },
          ],
        },
      ];
      setMenus(mockMenus);
    };

    fetchMenus();
  }, []);

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Menus</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Items Count</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {menus.map((menu) => (
            <TableRow key={menu.id}>
              <TableCell>{menu.name}</TableCell>
              <TableCell>{menu.items.length}</TableCell>
              <TableCell>
                <Button onClick={() => onSelectMenu(menu)}>View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default MenuList;
