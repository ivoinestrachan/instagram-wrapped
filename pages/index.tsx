import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import MediaWrap from "../components/MediaWrap";

interface MediaWrapProps {
  media: any[];
}

const Home: NextPage = () => {
  const [username, setUsername] = React.useState("");
  const [error, setError] = React.useState("");
  const [media, setMediaState] = React.useState<MediaWrapProps["media"]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://api.instagram.com/v1/users/${username}/media/recent?client_id=CLIENT_ID`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setMediaState(data.data);
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div>
      <Head>
        <title>Instagram Wrapped 2022</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button type="submit">Get your Unwrapped</button>
        {error && <div>{error}</div>}
      </form>

      <MediaWrap media={media} />
    </div>
  );
};

export default Home;
