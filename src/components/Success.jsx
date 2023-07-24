import React from "react";
import Image from "next/image";
import SingleBook from "./SingleBook";
function Success({ success }) {
  return (
    <div className="books side py-12">
      <h2>Success</h2>
      <div className="contain">
        <div className="inner-scroll">
          {success.map((book) => (
            <SingleBook book={book} key={book.id} />
          ))}
        </div>
      </div>
      {/* <div className="contain">
        <Image alt="" src="/1.png" width={200} height={400} />
        <Image alt="" src="/16.png" width={200} height={400} />
        <Image alt="" src="/19.png" width={200} height={400} />
        <Image alt="" src="/33.png" width={200} height={400} />
        <Image alt="" src="/18.png" width={200} height={400} />
        <Image alt="" src="/24.png" width={200} height={400} />
      </div> */}
    </div>
  );
}

export default Success;
