docker run --env-file .env --mount type=bind,source="$(pwd)",target=/usr/src/app/auth iarigby/spotify-playlists:latest
docker run --env-file .env -v $(pwd):/usr/src/app/auth iarigby/spotify-playlists:latest # for older docker versions eg on my fedora server