export const base_url_client = process.env.REACT_APP_API_BASE_URL;
export const base_url_server = process.env.API_BASE_URL;
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

    // return makeRequest(url, options);
  }
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response;
}
