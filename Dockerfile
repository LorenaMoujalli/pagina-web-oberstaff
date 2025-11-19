# 1. ETAPA DE CONSTRUCCIÓN (BUILD STAGE)
# Usamos una imagen de Node para ejecutar 'npm install' y 'npm run build'
FROM node:20-alpine AS build
WORKDIR /app
# >>> AGREGAR ESTAS LÍNEAS NUEVAS: <<<
ARG INTELLISCREEN_API_KEY
ARG INTELLISCREEN_BASE_URL

# Para que Astro pueda acceder a ellas durante la compilación (npm run build)
ENV INTELLISCREEN_API_KEY=$INTELLISCREEN_API_KEY
ENV INTELLISCREEN_BASE_URL=$INTELLISCREEN_BASE_URL
# >>> FIN DE LAS LÍNEAS NUEVAS <<<

# Copia los archivos de configuración
COPY package*.json ./
COPY astro.config.mjs ./

# Instala las dependencias y construye el proyecto
RUN npm install
COPY . .
RUN npm run build

# 2. ETAPA DE DESPLIEGUE (DEPLOYMENT STAGE)
# Usamos la imagen base limpia de Nginx (mucho más pequeña y segura)
FROM nginx:alpine

# Copia la configuración de Nginx (definida en el Paso 2)
# Esto sobrescribirá la configuración por defecto de Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos estáticos COMPILADOS (de la carpeta 'dist')
# desde la etapa 'build' a la ubicación donde Nginx espera encontrarlos.
# La ruta interna del contenedor Nginx es /usr/share/nginx/html
COPY --from=build /app/dist /usr/share/nginx/html

# El comando por defecto de Nginx ejecuta el servidor
CMD ["nginx", "-g", "daemon off;"]
