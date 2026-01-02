import Input from "../UI/Input.jsx";

export default function Header() {
  return (
    <header className="bg-blue-400 text-gray-100 p-3 mb-10 shadow-amber-200 shadow-xl">
      <div className="flex justify-between items-center container mx-auto">
        <a href="/">
          <i className="fa-regular fa-note-sticky mr-3"></i>
          <span className="text-2xl text-amber-200">Schedule Application</span>
        </a>
        <ul className="flex gap-2 items-center">
          <li>
            <form className="relative mt-3">
              <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
              <Input
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="bg-gray-50 text-gray-500 py-1 pl-9 pr-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </form>
          </li>

          <li>
            <a href="#" className="text-xl">
              Calendar
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
