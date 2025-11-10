# Etapa 1: build
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Etapa 2: servir archivos estáticos con nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Reemplaza la configuración por defecto
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
