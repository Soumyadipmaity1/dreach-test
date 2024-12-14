import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Content {
  id: string;
  title: string;
  type: string;
  lastModified: string;
  body: string;
}

interface ContentEditorProps {
  content: Content;
  onSave: (updatedContent: Content) => void;
  onCancel: () => void;
}

const ContentEditor: React.FC<ContentEditorProps> = ({ content, onSave, onCancel }) => {
  const [title, setTitle] = useState(content.title);
  const [type, setType] = useState(content.type);
  const [body, setBody] = useState(content.body);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...content, title, type, body, lastModified: new Date().toISOString().split('T')[0] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-semibold mb-2">Edit Content</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="Blog Post">Blog Post</option>
            <option value="Page">Page</option>
            <option value="News Article">News Article</option>
          </select>
        </div>
        <div>
          <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body</label>
          <Textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={10}
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

export default ContentEditor;
