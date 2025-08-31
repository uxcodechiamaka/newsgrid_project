export default function Navbar() {
  return (
    <div className="my-3">
      {/* First Navbar */}
      <div className="
        flex items-center
        gap-6 sm:gap-8 md:gap-10 
        justify-center 
        overflow-x-auto sm:overflow-x-visible
        border-t border-black py-4 font-medium px-4 sm:px-0
        text-xs md:text-sm
      ">
        <a href="/" className="whitespace-nowrap cursor-pointer">Home</a>
        <p className="whitespace-nowrap cursor-pointer ">World</p>
        <p className="whitespace-nowrap cursor-pointer">Politics</p>
        <p className="whitespace-nowrap cursor-pointer hidden md:block">Business</p>
        <p className="whitespace-nowrap cursor-pointer">Technology</p>
        <p className="whitespace-nowrap cursor-pointer ">Sports</p>
        <p className="whitespace-nowrap cursor-pointer hidden md:block">Entertainment</p>
        <p className="whitespace-nowrap cursor-pointer hidden md:block">Health</p>
        <p className="whitespace-nowrap cursor-pointer hidden md:block">Economy</p>
      </div>

      {/* Spacing between navs */}
      <div className="my-1"></div>

      {/* Second Navbar placeholder */}
      <div className="flex justify-center border-t border-black py-4"></div>
    </div>
  );
}
