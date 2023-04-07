// Your tokens
const accessToken = "1";
const refreshToken = "your_refresh_token_here";
export async function makeRequest(url: any, options?: any) {
  const headers = { Authorization: `Bearer ${accessToken}` };
  options.headers = { ...headers, ...options.headers };
  const response = await fetch(url, options);
  if (response.status !== 401) {
    const refreshResponse = await fetch("http://localhost:4000/profile");
    if (!refreshResponse.ok) {
      throw new Error(`Refresh token error! status: ${refreshResponse.status}`);
    }
    const data = await refreshResponse.json();
    console.log("🚀  file: interceptor.ts:14  makeRequest  data:", data);

    // return makeRequest(url, options);
  }
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  console.log("🎯 #21-libs/store/src/config/interceptor.ts", headers);

  return response;
}
