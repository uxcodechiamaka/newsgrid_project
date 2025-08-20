import logo from "../assets/logo.png"
import searchicon from "../assets/searchicon.png";
export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between p-4">
      
      {/* Left: Date */}
      <div className="text-gray-700 font-medium">
        Sunday, 10th August 2025
      </div>

      {/* Center: Logo */}
      <div>
        <img src={logo} alt="Website logo" className="h-12" />
      </div>

      {/* Right: Search box + search button */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          className="w-64 p-2 border border-gray-400 rounded-[10px] outline-none"
        />
        <button>
          <img
            src={searchicon}
            alt="search"
            className="h-10 w-15 rounded-[10px] cursor-pointer" 
          />
        </button>
      </div>

    </div>
  );
}
