FROM nginx:1.23.2-alpine
COPY ./packages/core/dist /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/default.conf
RUN chown -R nginx:nginx /usr/share/nginx/html

