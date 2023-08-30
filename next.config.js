/** @type {import('next').NextConfig} */
require("dotenv").config();

const nextConfig = {
  webpack: (config) => {
    config.plugins.push(new (require("dotenv-webpack"))());
    return config;
  },
};

module.exports = nextConfig;
