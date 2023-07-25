import React from "react";
import Image from "next/image";
import SingleBook from "./SingleBook";

function Leadership({ lead }) {
  return (
    <div className="books side py-12">
      <h2>Leadership</h2>
      <div className="contain">
        <div className="inner-scroll">
          {/* {lead.map((book) => (
            <SingleBook book={book} key={book.id} />
          ))} */}
        </div>
      </div>
      {/* <div className="contain">
        <Image alt="" src="/15.png" width={200} height={400} />
        <Image alt="" src="/28.png" width={200} height={400} />
        <Image alt="" src="/23.png" width={200} height={400} />
        <Image alt="" src="/27.png" width={200} height={400} />
        <Image alt="" src="/26.png" width={200} height={400} />
        <Image alt="" src="/24.png" width={200} height={400} />
      </div> */}
    </div>
  );
}

export default Leadership;
