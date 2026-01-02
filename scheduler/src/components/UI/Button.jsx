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
      className="bg-purple-500 text-gray-200 hover:bg-purple-700 hover:text-gray-50 rounded-md px-3 py-2 border-2 border-amber-50"
      {...props}
    >
      {children}
    </button>
  );
}
