const host = "http://s.wusiyu.me:48000";

export async function betterFetch(api, method, queries, body) {
  let res;
  let url = host + api;
  let params = [];
  for (let query in queries) {
    params.push(`${query}=${queries[query]}`);
  }
  params = params.join("&");
  url = `${url}?${params}`;
  if (method === "GET") {
    res = await fetch(url, {
      method: "GET",
    });
  } else {
    res = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return res.json();
}
