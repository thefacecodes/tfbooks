import React from "react";
import Image from "next/image";
import SingleBook from "./SingleBook";

function Relationships({ relationship }) {
  return (
    <div className="books side py-12">
      <h2>Relationships</h2>
      <div className="contain">
        <div className="inner-scroll">
          {relationship.map((book) => (
            <SingleBook book={book} key={book.id} />
          ))}
        </div>
      </div>
      {/* <div className="contain">
        <Image alt="" src="/8.png" width={200} height={400} />
        <Image alt="" src="/11.png" width={200} height={400} />
        <Image alt="" src="/13.png" width={200} height={400} />
        <Image alt="" src="/7.png" width={200} height={400} />
        <Image alt="" src="/4.png" width={200} height={400} />
        <Image alt="" src="/24.png" width={200} height={400} />
      </div> */}
    </div>
  );
}

export default Relationships;
