docker run --env-file .env --mount type=bind,source="$(pwd)",target=/usr/src/app/auth iarigby/spotify-playlists:latest