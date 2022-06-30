
const axios = require("axios")

export const getMeDogs = (endpoint: { url: any }) => {
    const url = endpoint.url

    return axios
        .request({
            method: "GET",
            baseURL: url,
            url: "/dogs",
            headers: { Accept: "application/json" },
        })
        .then((response: { data: any }) => response.data)
}

export const getMeCats = (endpoint: { url: any }) => {
    const url = endpoint.url

    return axios
        .request({
            method: "GET",
            baseURL: url,
            url: "/cats?catId[]=2&catId[]=3",
            headers: { Accept: "application/json" },
        })
        .then((response: { data: any }) => response.data)
}