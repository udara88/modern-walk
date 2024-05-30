import Link from "next/link";
const Navbar = () => {
  return (
    <header className="w-full px-4 py-1 ">
      <nav className="max-container flex justify-center items-center gap-4 mt-4   ">
        <Link href="/">
          <h1 className="lg:text-5xl text-4xl text-black font-bold capitalize ">
            modern walk
          </h1>
        </Link>
      </nav>

      <div className="border-t-4 text-gray-400 mt-4 "></div>
    </header>
  );
};

export default Navbar;
