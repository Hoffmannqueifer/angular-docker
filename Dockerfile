FROM node:latest as build 
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build /app/dist/convidados /usr/share/nginx/html