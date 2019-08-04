/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  apps: [
    {
      name: "picoll-server-admin",
      script: ".",
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      error_file: "/var/log/pm2/XXXerr.log",
      out_file: "/var/log/pm2/XXXout.log"
    }
  ]
};
