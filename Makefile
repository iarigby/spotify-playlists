name=iarigby/spotify-playlists
deploy:
    docker build -t $name .
    docker push $name:latest