import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

function CollectionsSelect() {
  return (
    <Select>
      <SelectTrigger variant="primary" className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Pokemon TCG</SelectItem>
        <SelectItem value="dark">One Piece TCG</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default CollectionsSelect;
