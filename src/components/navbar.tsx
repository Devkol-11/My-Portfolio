import NavLink from "./navLink";
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-5 shadow-md font-mono">
      <div className="text-xl font-semibold ">LOGO</div>
      <ul className=" hidden md:flex gap-6">
        <NavLink>Home</NavLink>
        <NavLink>Course</NavLink>
        <NavLink>Bootcamp</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Contact</NavLink>
      </ul>
      <div className="  hidden md:flex gap-3">
        <button className="px-4 py-2 rounded-md border border-blue-500 text-blue-600 hover:bg-blue-50 transition">
          Login
        </button>
        <button className="bg-linear-65 from-purple-500 to-pink-500 rounded-full p-4">
          Register
        </button>
      </div>
    </nav>
  );
}
