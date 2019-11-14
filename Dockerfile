FROM nginx

COPY ./dist/ /usr/share/nginx/html/

COPY ./vhost.nginx.conf /etc/nginx/conf.d/react-csr-templete.conf

EXPOSE 80