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

      <Link href="/library">Library</Link>
    </nav>
  );
}

export default Nav;
