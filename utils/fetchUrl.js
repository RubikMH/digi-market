const fetchUrl = async({ url, method = "GET", body }) => {
    const result = await fetch(url, {
        method,
        body,
    });

    return result.json();
};

export default fetchUrl;