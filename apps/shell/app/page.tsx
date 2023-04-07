import { makeRequest } from "@frame/store";

async function getData() {
  const res = await makeRequest("http://localhost:4000/posts", { cache: "force-cache" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <div>{data[0].author} 1</div>;
}
