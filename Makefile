name := iarigby/spotify-playlists

.PHONY : deploy

deploy :
	docker build -t $(name) .
	docker push $(name):latest