FROM node:12.16.1-alpine3.11 as builder
ARG env=prd

RUN apk update && apk add --no-cache make git
 
WORKDIR /app
COPY package-lock.json   /app/
COPY package.json  /app/
RUN npm install create-react-app -g
RUN npm install
COPY .  .

RUN npm run build

FROM nginx:alpine
ENV TZ=America/Fortaleza
RUN rm -rf /usr/share/nginx/html/*
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]