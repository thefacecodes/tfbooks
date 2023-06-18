import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "cs2mrx60",
  dataset: "production",
  useCdn: false,
  apiVersion: "v2021-10-21",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export default client;
