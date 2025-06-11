export default function Footer() {
  return (
    <footer className="w-full h-auto bg-gray-300 dark:bg-gray-700 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center">
        <p className="text-sm p-3 text-gray-700 dark:text-gray-300">
          © {new Date().getFullYear()} Dream Store. All rights reserved. Have a
          good day exploring. I hope you enjoyed your visit!
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          Built with Next.js, TypeScript, and Tailwind CSS. By Paul.
        </p>
      </div>
    </footer>
  );
}
