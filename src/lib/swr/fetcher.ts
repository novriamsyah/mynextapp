
export const fetcher = (url:string) => fetch(url).then((res) => res.json())


// type FetcherParams = [url: string, limit: number];
// with multiple arguments
// const fetcherz = async ([url, limit]:FetcherParams) => {
//     const res = await fetch(`${url}?_limit=${limit}`);
//   };
  
//   const { data } = useSWR(
//     [`https://jsonplaceholder.typicode.com/comments`, ],
//     fetcher
//   );