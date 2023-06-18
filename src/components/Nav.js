import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <nav className="side">
      <Link href="/">
        <h1 className="text-2xl">
          <span className="text-lightBlue font-bold">TFB</span>ooks
        </h1>
      </Link>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <Link href="/library">Library</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
