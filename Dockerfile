ARG APP_UI_ENCRYPTION_KEY

# Stage 1 - Build Application (Node v18.18.0 LTS)
FROM node:lts-buster-slim AS BuildApp
RUN echo "Stage 1 - Build Application"

RUN apt-get update && apt-get install -y g++ make

ARG BUILD_ENV_TAG
ARG APP_UI_ENCRYPTION_KEY

WORKDIR /app

RUN echo "Working directory: $(pwd)"
COPY . .
RUN ls -la
RUN npm ci
RUN echo "Building Application for '${BUILD_ENV_TAG}' environment"
RUN APP_UI_ENCRYPTION_KEY=${APP_UI_ENCRYPTION_KEY} npm run build:${BUILD_ENV_TAG}

# Stage 2 - Deploy Application on Nginx
FROM nginx:alpine AS DeployApp
RUN echo "Stage 2 - Deploy Application on Nginx"

RUN apk add --no-cache gnupg

ARG APP_UI_ENCRYPTION_KEY
ENV ENV_APP_UI_ENCRYPTION_KEY=${APP_UI_ENCRYPTION_KEY}
ENV ENV_INPUT_FILE_PATH="/opt/app/assets/env/.env.${BUILD_ENV_TAG}"
ENV ENV_OUTPUT_FILE_PATH="/usr/share/nginx/html/assets/env/.env.${BUILD_ENV_TAG}"

RUN echo "Working directory: $(pwd)"
COPY --from=BuildApp /app/dist/angular-redux-rxjs-clean-architecture-skeleton /usr/share/nginx/html
COPY --from=BuildApp /app/docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=BuildApp /app/scripts/encryption/encryptFile.sh /opt/app/scripts/encryptFile.sh
RUN chmod +x /opt/app/scripts/encryptFile.sh

EXPOSE 80

CMD ["sh", "-c", "/opt/app/scripts/encryptFile.sh ${ENV_APP_UI_ENCRYPTION_KEY} ${ENV_INPUT_FILE_PATH} ${ENV_OUTPUT_FILE_PATH} && exec nginx -g 'daemon off;'"]