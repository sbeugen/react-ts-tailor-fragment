import queryString from "querystring";

export const queryParams = queryString.parse(window.location.search.substring(1));