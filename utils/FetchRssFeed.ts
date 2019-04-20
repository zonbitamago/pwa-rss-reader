import nodefetch from "node-fetch";

interface URL {
  url: string;
}

const FetchRssFeed = async (urlsArr: string[]) => {
  const urls: URL[] = urlsArr.map((url: string) => {
    return { url: url };
  });

  const body = {
    urls: urls
  };

  const res = await nodefetch("https://goparallelfeed.now.sh", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  });

  const json = await res.json();
  return json;
};

export default FetchRssFeed;
