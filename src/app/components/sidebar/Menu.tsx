import { Archive as AllItemsIcon } from "lucide-react";
import { Plus as ListItemIcon } from "lucide-react";
import { NotebookTabs as CurrentlyListedIcon } from "lucide-react";
import MenuItem from "./MenuItem";
export default function Menu() {
  return (
    // Menu component that renders a list of menu items
    // Each menu item is a list item with an icon and label
    <ul className=" mt-7 flex flex-col text-white dark:text-gray-500 ">
      <MenuItem icon={AllItemsIcon} label="All items" />
      <MenuItem icon={ListItemIcon} label="Add item" />
      <MenuItem icon={CurrentlyListedIcon} label="Currently listed" />
    </ul>
  );
}
