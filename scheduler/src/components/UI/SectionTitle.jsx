export default function SectionTitle({ title, color }) {
  return (
    <div className="w-full bg-purple-500 text-gray-50 mx-auto rounded-xl py-3 px-1 mb-3 shadow-xl">
      <p className="text-center text-xl text-gray-100">{title}</p>
    </div>
  );
}
