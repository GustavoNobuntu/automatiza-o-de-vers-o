# Estágio 1
FROM node:lts-alpine as builder

WORKDIR /app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# COPY .  /usr/src/sample/
RUN npm install @angular/cli -g
RUN npm i
RUN ng config -g cli.warnings.versionMismatch false
COPY . .
EXPOSE 8081

# A head-of-time compilation
#RUN ng serve --port 8081
CMD ["ng", "serve", "--port", "8081"]

# Estágio 2
#FROM nginx:alpine as prodagil-frontend
#VOLUME /var/cache/nginx
#RUN rm -rf /usr/share/nginx/html/*
#COPY --from=builder app/dist/frontend /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/conf.d/default.
#CMD ["nginx", "-g", "daemon off;"]

# teste 