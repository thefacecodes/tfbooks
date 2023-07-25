import Image from "next/image";
import { Inter } from "next/font/google";
// import Help from "@/components/Help";
// import Leadership from "@/components/Leadership";
// import Success from "@/components/Success";
// import Relationships from "@/components/Relationships";

import client, { urlFor } from "../../sanity";
import Hero from "@/components/Hero";
// import { createClient } from "next-sanity";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ books }) {
  console.log("Books", books);
  console.log("Single book image url", urlFor(books[0].mainImage).url());
  return (
    <>
      <Hero />
      {/* <Help help={books.help} />
      <Leadership lead={books.leadership} />
      <Success success={books.success} />
      <Relationships relationship={books.relationship} /> */}
    </>
  );
}

export async function getStaticProps() {
  const books = await client.fetch(`*[_type == "post"]`);

  return {
    props: {
      books,
    },
  };
}
