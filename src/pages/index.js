import Image from "next/image";
import { Inter } from "next/font/google";
// import Help from "@/components/Help";
// import Leadership from "@/components/Leadership";
// import Success from "@/components/Success";
// import Relationships from "@/components/Relationships";

import client from "../../sanity";
// import { createClient } from "next-sanity";

const inter = Inter({ subsets: ["latin"] });

export default async function Home({ books }) {
  console.log("Books", books);
  return (
    <>
      <div className="relative">
        <Image
          alt=""
          src="/library.webp"
          width={800}
          height={600}
          className="w-full h-screen"
        />
        <div className="absolute top-0 left-0 backdrop-blur-sm right-0 bottom-0 bg-transparentBlack flex justify-center items-center">
          <h1 className="uppercase font-Mont text-6xl text-center font-bold leading-none">
            Read Books, <br />
            Unleash Your Creativity.
          </h1>
        </div>
      </div>
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
