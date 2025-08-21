export default function Navbar() {
  return (
    <div className="my-3">
      {/* First Navbar */}
      <div className="flex flex-row gap-10 justify-center border-t border-black py-4 font-medium">
        <p>Home</p>
        <p>World</p>
        <p>Politics</p>
        <p>Business</p>
        <p>Technology</p>
        <p>Sports</p>
        <p>Entertainment</p>
        <p>Health</p>
        <p>Economy</p>
      </div>

      {/* Spacing between navs */}
      <div className="my-1"></div>
       <div className="flex flex-row gap-10 justify-center border-t border-black py-4"></div>
    </div>
  );
}
