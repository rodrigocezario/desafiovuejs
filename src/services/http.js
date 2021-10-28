import axios from "axios";

const client = axios.create({
    baseURL: "https://staging.api.cda.digital/api/v2/",
});

export default client;
