import { Plus as ListItemIcon, Home } from "lucide-react";
import Link from "next/link";
import { NotebookTabs as CurrentlyListedIcon } from "lucide-react";
import MenuItem from "./MenuItem";
export default function Menu({
  setSidebarOpen,
}: {
  setSidebarOpen: (open: boolean) => void;
}) {
  return (
    // Menu component that renders a list of menu items
    // Each menu item is a list item with an icon and label
    <ul className=" mt-7 flex flex-col text-white dark:text-gray-500 ">
      <Link href="/" onClick={() => setSidebarOpen(false)}>
        <MenuItem icon={Home} label="Home" />
      </Link>
      <Link href="/products/addproduct" onClick={() => setSidebarOpen(false)}>
        <MenuItem icon={ListItemIcon} label="Add item" />
      </Link>
      <Link
        href="/products/currentlylisted"
        onClick={() => setSidebarOpen(false)}
      >
        <MenuItem icon={CurrentlyListedIcon} label="Currently listed" />
      </Link>
    </ul>
  );
}
