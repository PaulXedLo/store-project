"use client";
import { motion } from "framer-motion";
import { Menu as SidebarMenu } from "lucide-react";
import Menu from "./Menu";

export default function SidebarContainer({
  setSidebarOpen,
}: {
  setSidebarOpen: (open: boolean) => void;
}) {
  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <motion.aside
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-70 h-auto fixed top-0 left-0 bg-white dark:bg-gray-800 shadow-lg z-40 p-4 overflow-y-auto"
    >
      <SidebarMenu />
      <Menu setSidebarOpen={setSidebarOpen} />
    </motion.aside>
  );
}
