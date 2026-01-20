# Guía de Ejecución - Todo App

## Levantar todos los servicios

Para levantar todos los contenedores (mongo, redis, backend y frontend) con nginx como reverse proxy, ejecuta el siguiente comando desde el directorio `todo-app/`:

```bash
docker-compose -f docker-compose.dev.yml -f todo-backend/docker-compose.mongo.yml up --build
```

### Servicios levantados

Este comando inicia los siguientes contenedores:

- **MongoDB** - Base de datos (puerto 3456)
- **Redis** - Cache (puerto 6378)
- **Backend** - API Express (puerto 3003)
- **Frontend** - Aplicación Vite (puerto 5173)
- **Nginx** - Reverse proxy (puerto 8080)

### Acceso a la aplicación

- **A través de Nginx**: http://localhost:8080
- **Backend directo**: http://localhost:3003
- **Frontend directo**: http://localhost:5173

### Detener los servicios

```bash
docker-compose -f docker-compose.dev.yml -f todo-backend/docker-compose.mongo.yml down
```

## Notas importantes

- **Orden de archivos**: Es importante mantener el orden de los archivos para que los paths relativos se resuelvan correctamente
- **Contexto**: Ejecutar siempre desde el directorio `todo-app/`
- **Red compartida**: Ambos docker-compose se combinan en una sola red, permitiendo la comunicación entre contenedores usando nombres de servicio (mongo, redis, etc.)
