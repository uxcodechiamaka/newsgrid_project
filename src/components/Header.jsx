import logo from "../assets/logo.png";
import searchicon from "../assets/searchicon.png";

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 gap-4">

      {/* Left: Date */}
      <div className="text-gray-700 font-medium text-sm sm:text-base order-2 sm:order-1">
        Sunday, 10th August 2025
      </div>

      {/* Center: Logo */}
      <div className="order-1 sm:order-2">
        <img src={logo} alt="Website logo" className="h-10 sm:h-12 mx-auto" />
      </div>

      {/* Right: Search box + search button */}
      <div className="flex items-center gap-2 w-full sm:w-auto order-3">
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 sm:w-64 p-2 border border-gray-400 rounded-[10px] outline-none text-sm"
        />
        <button className="shrink-0">
          <img
            src={searchicon}
            alt="search"
            className="md:h-10 md:w-10 w-8 h-8 md:rounded-[10px] rounded-[5px] cursor-pointer"
          />
        </button>
      </div>

    </div>
  );
}
