import { Menu } from "lucide-react";
import ThemeToggle from "../common/ThemeToggle";

export default function Header() {
  return (
    <nav className="dark:bg-gray-800 w-full h-20 flex items-center justify-between px-4 shadow-md">
      <Menu className="cursor-pointer" />
      <ThemeToggle />
    </nav>
  );
}
