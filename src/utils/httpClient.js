const API = "https://api.themoviedb.org/3";

export function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NmZmYmQwN2ZhYjk4MzE1YzZhNmZmMDVmZmFmZjZiYiIsInN1YiI6IjYyMDkzYTQ1OTQ1ZDM2MDA4YTgzOTBjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dCbgYLG5nKjtOpviKoXzKicexXP5PkuUCRZnC6sDVDk",
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}
