export default function Button({ children }: { children?: React.ReactNode }) {
  return (
    <button className=" cursor-pointer px-9 rounded-full py-2 bg-purple-500 hover:bg-purple-600 text-white shadow-lg transition duration-200">
      {children}
    </button>
  );
}
