import nodefetch from "node-fetch";

interface URL {
  url: string;
}

export interface FetchResultsInterface {
  results: Array<FetchResultsElementInterface>;
}

export interface FetchResultsElementInterface {
  result: boolean;
  url: string;
  feed: any;
}

const FetchRssFeed = async (urlsArr: string[]) => {
  const urls: URL[] = urlsArr.map((url: string) => {
    return { url: url };
  });

  const body = {
    urls: urls
  };

  return nodefetch("https://goparallelfeed.now.sh", {
    method: "post",
    body: JSON.stringify(body),
    headers: {
      // "Content-Type": "application/json",
      // CORS対策のため
      // https://github.com/axios/axios/issues/853#issuecomment-432283879
      "content-type": "application/x-www-form-urlencoded"
    }
  })
    .then(res => {
      return res.json();
    })
    .then(json => {
      const result: FetchResultsInterface = json;
      return result;
    });

  // Promise.all(promiseList).then((feedList) => {

  // })

  // const res = await nodefetch("https://goparallelfeed.now.sh", {
  //   method: "post",
  //   body: JSON.stringify(body),
  //   headers: {
  //     // "Content-Type": "application/json",
  //     // CORS対策のため
  //     // https://github.com/axios/axios/issues/853#issuecomment-432283879
  //     "content-type": "application/x-www-form-urlencoded"
  //   }
  // });

  // const json: FetchResultsInterface = await res.json();
  // return json;
};

export default FetchRssFeed;
