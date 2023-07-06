import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = null;
  return (
    <div className="border-b shadow-sm px-4">
      <div className="navbar bg-base-100 flex items-center justify-between">
        <div className="">
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt="logo" width={115} height={45} />
          </Link>
        </div>

        <ul className="hidden lg:flex gap-5 pl-10">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>

        <div className="">
          {session ? (
            <>
              user photo
              <Link href={"/create-project"}>Share work</Link>
            </>
          ) : (
            <>
              <AuthProviders />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
