const fetchUrl = async({ url, method = "GET" }) => {
    const result = await fetch(url, {
        method,
    });

    return result.json();
};

export default fetchUrl;