FROM node:22-bookworm-slim
EXPOSE 5173
COPY . ./frontend
RUN apt-get update && apt-get install -y git
RUN cd frontend/app && yarn install