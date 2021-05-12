FROM node:15.13-alpine
WORKDIR /dynamite-movies-frontend
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
