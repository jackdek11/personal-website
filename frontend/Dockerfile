# build stage
FROM node:20-alpine as build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build -- --mode production

RUN ["chmod", "+x", "/app/enter.sh"]

# production stage
FROM nginx:stable-alpine as production-stage

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY ./enter.sh /enter.sh

RUN nginx -t

EXPOSE 80

ENTRYPOINT [ "/enter.sh" ]

CMD ["nginx", "-g", "daemon off;"]