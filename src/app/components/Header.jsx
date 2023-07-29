import Link from "next/link";

function Header() {
  return (
    <header className="flex   justify-evenly items-center w-full h-20 text-xl px-4">
      <h1 className="font-semibold text-4xl">
        <span className="text-rose-500">K</span>S
      </h1>
      <nav className=" w-1/4 flex justify-between text-2xl ">
        <Link href={"/"} className="hover:underline underline-offset-2">
          Home
        </Link>
        <Link href={"/projects"} className="hover:underline underline-offset-2">
          Projects
        </Link>
        <Link href={"/blogs"} className="hover:underline underline-offset-2">
          Blogs
        </Link>
      </nav>
    </header>
  );
}
export default Header;
