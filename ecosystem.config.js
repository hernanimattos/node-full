module.exports = {
  apps: [
    {
      name: 'HOST_HTTPS',
      script: 'index.js',
      autorestart: true,
      watch: true,
      max_memory_restart: '1G',
      env: {
        PORT: 3000,
        NODE_ENV: 'development',
      },
    },
  ],
};
