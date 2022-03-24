const YOUTUBE_PLAYLIST_API = "https://www.googleapis.com/youtube/v3/playlistItems";
let URL = `${YOUTUBE_PLAYLIST_API}?part=snippet&playlistId=PLwhctkjPHK9a2eB7AhUcRQm8h4_854N96&maxResults=50&type=audio&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

export default async function getMusics(pageToken) {
  if (pageToken) {
    URL = `${URL}&pageToken=${pageToken}`;
  }
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}
