"use client";

import Banner from "@/components/Banner";
import React, { useState } from "react";
import books from "@/books.json";
import SingleBook from "@/components/SingleBook";
import { AiOutlineBackward, AiOutlineForward } from "react-icons/ai";
import client from "../../sanity";

function library({ books }) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Banner page="Library" sub="Library" />
      <div className="library side">
        <div className="sidebar w-1/5">
          <input
            type="search"
            name="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className="w-full border-2 outline-none border-lightBlue h-[35px] px-2"
            placeholder="Search book..."
            autoComplete="off"
          />
          <h3 className="my-4 font-semibold">Categories</h3>
          <input
            type="checkbox"
            name="category"
            className="mb-3 mr-2"
            id="self-help"
          />
          Self-help
          <br />
          <input
            type="checkbox"
            name="category"
            className="mb-3 mr-2"
            id="self-help"
          />
          Success
          <br />
          <input
            type="checkbox"
            name="category"
            className="mb-3 mr-2"
            id="self-help"
          />
          Finance
          <br />
          <input
            type="checkbox"
            name="category"
            className="mb-3 mr-2"
            id="self-help"
          />
          Leadership
          <br />
          <input
            type="checkbox"
            name="category"
            className="mb-3 mr-2"
            id="self-help"
          />
          Programming
          <br />
          <input
            type="checkbox"
            name="category"
            className="mb-3 mr-2"
            id="self-help"
          />
          Fiction
          <br />
          <input
            type="checkbox"
            name="category"
            className="mb-3 mr-2"
            id="self-help"
          />
          Romance
          <br />
        </div>
        <div className="w-4/5">
          <div className="main ">
            {books.map((book) => (
              <SingleBook book={book} key={book._id} />
            ))}
          </div>
          <div className="flex gap-3 justify-center items-center mt-6 w-full">
            <button className="h-[40px] flex justify-center items-center w-[40px] shadow font-bold text-base">
              <AiOutlineBackward />
            </button>
            <button className="h-[40px] flex justify-center items-center w-[40px] shadow bg-lightBlue text-white font-bold text-base">
              2
            </button>
            <button className="h-[40px] flex justify-center items-center w-[40px] shadow font-bold text-base">
              <AiOutlineForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default library;

export async function getStaticProps() {
  const books = await client.fetch(`*[_type == "post"]`);

  return {
    props: {
      books,
    },
  };
}
