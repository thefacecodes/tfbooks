import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../sanity";

function SingleBook({ book }) {
  console.log("Book image url", urlFor(book.mainImage).url());
  const src = urlFor(book.mainImage).url();
  return (
    <div className="singlebook">
      <Image
        loader={() => src}
        src={src}
        unoptimized={true}
        alt=""
        height={200}
        width={200}
      />
      <Link href="/books/[id]" as={`/books/${book._id}`}>
        <h3 className="text-lightBlue mt-3 font-bold text-center">
          {book.title}
        </h3>
      </Link>
    </div>
  );
}

export default SingleBook;
