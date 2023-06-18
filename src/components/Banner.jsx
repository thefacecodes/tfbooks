import React from "react";
import Link from "next/link";

function Banner({ page, sub }) {
  return (
    <div className="banner">
      <div className="overlay">
        <h1>{page}</h1>
        <p>
          <Link href="/">Home</Link> &#062; {sub}
        </p>
      </div>
    </div>
  );
}

export default Banner;
