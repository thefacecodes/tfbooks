import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../sanity";

function SingleBook({ book }) {
  return (
    <div className="singlebook">
      <img src={urlFor(book.mainImage).url()} />
      <Link href="/books/[id]" as={`/books/${book._id}`}>
        <h3 className="text-lightBlue mt-3 font-bold text-center">
          {book.title}
        </h3>
      </Link>
    </div>
  );
}

export default SingleBook;
