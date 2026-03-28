/**
 * PM2 Ecosystem Configuration for BusyNotify
 * 
 * Usage:
 *   pm2 start ecosystem.config.js
 *   pm2 restart ecosystem.config.js
 *   pm2 stop ecosystem.config.js
 *   pm2 delete ecosystem.config.js
 * 
 * For production deployment on CloudPanel:
 *   1. Run: npm install
 *   2. Run: npm run build
 *   3. Run: pm2 start ecosystem.config.js
 */

module.exports = {
  apps: [
    {
      name: 'busynotify',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: __dirname,
      
      // Environment configuration
      env_file: '.env',
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 3000,
      },
      
      // Process management
      instances: 1,
      exec_mode: 'fork',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      
      // Logging
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      error_file: './logs/error.log',
      out_file: './logs/out.log',
      merge_logs: true,
      
      // Restart configuration
      exp_backoff_restart_delay: 100,
      max_restarts: 10,
      restart_delay: 1000,
      
      // Graceful shutdown
      kill_timeout: 5000,
      wait_ready: true,
      listen_timeout: 10000,
    },
  ],
};
