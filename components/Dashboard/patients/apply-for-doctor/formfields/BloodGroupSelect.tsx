import React from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { FieldError } from "react-hook-form";

interface BloodGroupSelectProps {
  onValueChange: (value: string) => void;
  value?: string;
  error?: FieldError;
}

const BloodGroupSelect: React.FC<BloodGroupSelectProps> = ({ onValueChange, value, error }) => {
  return (
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger id="bloodGroup" className={error ? "border-red-500" : ""}>
        <SelectValue placeholder="Select blood group" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="A+">A+</SelectItem>
        <SelectItem value="A-">A-</SelectItem>
        <SelectItem value="B+">B+</SelectItem>
        <SelectItem value="B-">B-</SelectItem>
        <SelectItem value="AB+">AB+</SelectItem>
        <SelectItem value="AB-">AB-</SelectItem>
        <SelectItem value="O+">O+</SelectItem>
        <SelectItem value="O-">O-</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default BloodGroupSelect;