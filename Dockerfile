FROM nginx
COPY build /usr/share/nginx/html
ENTRYPOINT ["/bin/sh", "-c" , "npm ci && npm start"]