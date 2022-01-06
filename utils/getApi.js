import fetchUrl from "./fetchUrl";

const getApi = async(endpoint) => {
    const result = await fetchUrl(
        `https://jsonplaceholder.typicode.com/${endpoint}`
    );
    return result;
};
export default getApi;