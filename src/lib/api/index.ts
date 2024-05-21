"use server";

import axios from "axios";

const spotifyApi = axios.create({
  baseURL: "https://api.spotify.com/v1/",
  timeout: 1000,
  headers: {},
});

export default spotifyApi;
