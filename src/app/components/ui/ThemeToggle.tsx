"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkTheme, setDarkTheme] = useState(false);
  // Check for saved theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkTheme(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);
  // Toggle theme function
  // This function toggles the theme between light and dark
  // It updates the state and also saves the preference in localStorage
  function toggleTheme() {
    setDarkTheme((prev) => {
      document.documentElement.classList.toggle("dark", !prev);
      localStorage.setItem("theme", !prev ? "dark" : "light");
      return !prev;
    });
  }
  return (
    // This button toggles the theme between light and dark
    <button
      onClick={toggleTheme}
      className="p-2 rounded text-2xl text-black dark:text-white"
    >
      {darkTheme ? "🌙" : "☀️"}
    </button>
  );
}
