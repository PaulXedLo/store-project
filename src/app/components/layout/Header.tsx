"use client";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import SidebarContainer from "../sidebar/SidebarContainer";
const storeMenuVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 1 },
};
const navbarVariants = {
  initial: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Function to toggle the sidebar open/close state
  function toggleSidebar() {
    setSidebarOpen((prev) => !prev);
  }
  // Prevents body scroll when sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [sidebarOpen]);

  return (
    <>
      {/* Navbar 
      Menu icon and a theme toggle component that toggles theme from dark/light 
      */}
      <motion.nav
        variants={navbarVariants}
        initial="initial"
        animate="visible"
        className="fixed top-0 left-0 h-16 bg-white dark:bg-gray-800 w-full flex items-center justify-between px-4 shadow-md z-50"
      >
        <div className="flex items-center gap-4">
          <Menu
            className="cursor-pointer text-slate-900 dark:text-white"
            onClick={toggleSidebar}
          />
          {sidebarOpen && (
            <motion.h1
              variants={storeMenuVariants}
              initial="initial"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              className=" ml-3 hidden sm:block text-slate-900 dark:text-white"
            >
              Store menu
            </motion.h1>
          )}
        </div>
        {/* Main title in the center */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <motion.h1
            key="main-title"
            variants={storeMenuVariants}
            initial="initial"
            animate="visible"
            className="text-xl font-bold text-slate-900 dark:text-white"
          >
            Dream Store
          </motion.h1>
        </div>
        {/* Theme toggle button */}
        <ThemeToggle />
      </motion.nav>
      {/*Sidebar */}
      <AnimatePresence>
        {sidebarOpen && <SidebarContainer setSidebarOpen={setSidebarOpen} />}
      </AnimatePresence>
    </>
  );
}
