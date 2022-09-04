import Image from "next/image";
import Link from "next/link";
import Logo from "../public/images/logo.png";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    const id = router.query.id;
    console.log(id);
  }, [id]);

  return (
    <nav>
      <div className="logo">
        <Image src={Logo} width={250} height={140} />
      </div>
      <ul className="menu">
        <li>
          <Link href="/">
            <a className="active">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="">About</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a className="">Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/team">
            <a className="">Team</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a className="">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
