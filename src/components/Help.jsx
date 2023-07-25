import React from "react";

import SingleBook from "./SingleBook";

function Help({ help }) {
  return (
    <div className="books side py-12">
      <h2>Self-help</h2>
      <div className="contain">
        <div className="inner-scroll">
          {/* {help.map((book) => (
            <SingleBook book={book} key={book.id} />
          ))} */}
        </div>
      </div>
    </div>
  );
}

export default Help;
