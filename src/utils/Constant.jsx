export const loginAvatar =
  "https://wallpapers.com  /images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

export const BG_IMG =
  "https://assets.nflxext.com/ffe/siteui/vlv3/c8267e3b-8beb-4ec5-8e00-a74f627a0971/web/IN-en-20250623-TRIFECTA-perspective_c3506438-e049-4b1d-82df-a88ad340f15e_large.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const POSTER_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "in", name: "Hindi" },
  { identifier: "sp", name: "Spanish" },
];

export const GENAI_KEY =
  import.meta.env.VITE_GENAI_KEY;
