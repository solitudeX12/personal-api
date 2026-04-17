# Stage 1 API Deployment

A minimal Node.js/Express API with three JSON endpoints.

## What this project is

This project exposes a small API using Express. It includes three endpoints:

- `GET /` returns a basic running status message.
- `GET /health` returns a health status message.
- `GET /me` returns contact details for the developer.

The API is intended to be deployed behind an Nginx reverse proxy on a VPS, with the app running on a non-public port.

## How to run it locally

1. Install dependencies:

```bash
npm install
```

2. Start the app:

```bash
npm start
```

3. Open your browser or use `curl`:

```bash
curl http://localhost:3000/
```

The server listens on port `3000` by default.

## Endpoints

### `GET /`

Response:

```json
{
  "message": "API is running"
}
```

### `GET /health`

Response:

```json
{
  "message": "healthy"
}
```

### `GET /me`

Response:

```json
{
  "name": "Babatofunmi Osho-Davies",
  "email": "davietosh2004@gmail.com",
  "github": "https://github.com/solitudex12"
}
```

## Deployment

For deployment, run the Node app on a non-public port like `3000` and configure Nginx as a reverse proxy to forward public traffic to the app.

### Example Nginx proxy configuration

```nginx
server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Live Deployment URL

`https://<your-live-domain-or-ip>`

Replace the placeholder above with your actual public deployment URL once deployed.
