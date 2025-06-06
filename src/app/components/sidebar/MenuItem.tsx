"use client";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
// Importing LucideIcon type for type safety
type MenuItemProps = {
  icon: LucideIcon;
  label: string;
};
const menuItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, y: -20 },
};

// MenuItem component that renders a single menu item with an icon and label
export default function MenuItem({ icon: Icon, label }: MenuItemProps) {
  return (
    <motion.li
      variants={menuItemVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex gap-7 text-gray-800 dark:text-white p-4 cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-700 duration-500 transition-colors"
    >
      <Icon size={22} />
      {label}
    </motion.li>
  );
}
