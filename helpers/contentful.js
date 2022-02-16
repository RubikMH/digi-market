import * as SDK from "contentful";

const contentful = SDK.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "oaoq4p0n1410",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "nlljO2-bphu9CGCyPejZfmiTq8GBXzyb7U-a7yF9Gp0",
});

export default contentful;