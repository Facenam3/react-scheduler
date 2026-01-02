export default function SectionTitle({ title, done }) {
  let sectionTitle = (
    <div className="w-full bg-purple-500 text-gray-50 mx-auto rounded-xl py-3 px-1 mb-3 shadow-xl">
      <p className="text-center text-xl text-gray-100">{title}</p>
    </div>
  );

  if (done) {
    return (sectionTitle = (
      <div className="w-full bg-amber-400 text-gray-50 mx-auto rounded-xl py-3 px-1 mb-3 shadow-xl">
        <p className="text-center text-xl text-gray-100">{title}</p>
      </div>
    ));
  }

  return sectionTitle;
}
