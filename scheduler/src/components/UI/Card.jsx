import Checkbox from "./Checkbox.jsx";

export default function Card() {
  return (
    <div className=" bg-gray-50 rounded-xl p-3 shadow-2xl mb-3 border-l-4 border-purple-500 flex items-center">
      <div className="flex flex-col w-5/6 p-3">
        <p>07:00</p>
        <h4>Work</h4>
        <p>Go to work, and earn some money!</p>
      </div>
      <div className="w-1/6">
        <Checkbox />
      </div>
    </div>
  );
}
