import { makeRequest } from "@frame/store";

async function getData() {
  const res = await makeRequest(process.env.API_BASE_URL, { cache: "force-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <div>{data[0].title}</div>;
}
