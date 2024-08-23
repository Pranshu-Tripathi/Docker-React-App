FROM node:16-alpine as builder
WORKDIR /app
COPY  package.json .
RUN npm install
COPY . .
RUN npm run build

# /app/build will have the files that we need at runtime.

FROM nginx
# For me expose was not needed on final deployment. But just in case,
# here's how you can expose the port.
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
