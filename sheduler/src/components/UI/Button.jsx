export default function Button({ children, color, ...props }) {
  if (color) {
    return (
      <button
        className="= hover:text-gray-200 border-2 border-purple-500 rounded-md px-3 py-2 bg-stone-200 hover:bg-stone-700 hover:border-purple-200"
        {...props}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className="bg-blue-400 text-gray-50 hover:bg-blue-700 hover:text-gray-200 rounded-md px-3 py-2"
      {...props}
    >
      {children}
    </button>
  );
}
