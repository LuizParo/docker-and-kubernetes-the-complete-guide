docker build -t luizparo/multi-client -f ./client/Dockerfile ./client
docker build -t luizparo/multi-server -f ./server/Dockerfile ./server
docker build -t luizparo/multi-worker -f ./worker/Dockerfile ./worker

docker push luizparo/multi-client
docker push luizparo/multi-server
docker push luizparo/multi-worker

kubectl apply -f k8s

kubectl set image image deployments/server-deployment server=luizparo/multi-server