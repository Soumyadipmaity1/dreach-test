"use client";
import React, { useState } from "react";
import PageManagement from "./PageManagement";
import ContentManagement from "./ContentManagement";
import MediaManagement from "./MediaManagement";
import CategoryManagement from "./CategoryManagement";
import TagManagement from "./TagManagement";
import MenuManagement from "./MenuManagement";

const SiteManagerDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("pages");

  const tabs = [
    { id: "pages", label: "Pages" },
    { id: "content", label: "Content" },
    { id: "media", label: "Media" },
    { id: "categories", label: "Categories" },
    { id: "tags", label: "Tags" },
    { id: "menus", label: "Menus" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "pages":
        return <PageManagement />;
      case "content":
        return <ContentManagement />;
      case "media":
        return <MediaManagement />;
      case "categories":
        return <CategoryManagement />;
      case "tags":
        return <TagManagement />;
      case "menus":
        return <MenuManagement />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`mr-2 px-4 py-2 rounded ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {renderContent()}
    </div>
  );
};

export default SiteManagerDashboard;
