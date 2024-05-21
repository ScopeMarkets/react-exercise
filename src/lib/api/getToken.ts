"use server";

import axios, { AxiosRequestConfig } from "axios";

type TokenResponse = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

const config = {
  auth: {
    username: process.env.SPOTIFY_CLIENT_ID!,
    password: process.env.SPOTIFY_APP_CLIENT_SECRET!,
  },
  headers: { "content-type": "application/x-www-form-urlencoded" },
} satisfies AxiosRequestConfig<URLSearchParams>;

const params = new URLSearchParams();
params.append("grant_type", "client_credentials");

let cachedToken: string | null = null;
let tokenExpiry: number | null = null;

const getToken = async (): Promise<string> => {
  if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
    return cachedToken;
  }

  const { data } = await axios.post<TokenResponse>(
    "https://accounts.spotify.com/api/token",
    params,
    config,
  );
  const { access_token, expires_in, token_type } = data;

  cachedToken = `${token_type} ${access_token}`;
  tokenExpiry = Date.now() + expires_in * 1000 - 100;

  return cachedToken;
};

export default getToken;
