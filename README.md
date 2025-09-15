# Spotify Categories - Short version

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Overview

A basic tech test involving Spotify integration. Scope Markets are building their own internal music browsing platform for UK users. Your tasks include:

* Implementing features on top of the Spotify API integration.
* Identifying and fixing any issues within the repository.
* One of the endpoints has been integrated but is not yet displayed on the frontend. Please address this as part of your tasks.
* Report any problems you encounter and either discuss them or fix them as you proceed.

### Setup

#### Versioning

* Node version: `v21.7.3`
* NPM version: `10.5.0`

#### Environment Setup

Contact author regarding `.env` setup:

```properties
SPOTIFY_CLIENT_ID=XYZ
SPOTIFY_APP_CLIENT_SECRET=XYZ
```

#### Running

Run the development server:

```ps1
npm install
npm run dev
```

### Steps

1. Create .env and fill in `SPOTIFY_CLIENT_ID` and `SPOTIFY_APP_CLIENT_SECRET`. (Your interviewer will provide you with these secrets)
2. Fetch spotify categories from the NextJS backend in the `Categories.tsx` component. The endpoint can be found at `/api/categories`
3. Lazy load in Skeleton images and titles with the response from the api.
4. Make sure all music content is in English - if not, fix it.
5. In our app, we only want to display calm music. One of the categories we get back is 'Rock'. Let's filter out any categories that have the term 'rock'.
6. Interviewer will guide you on your final tasks depending on how much time you have left.

