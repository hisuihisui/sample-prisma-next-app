/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

// 中間APIをたたけるように
const dns = require("dns");

dns.setDefaultResultOrder("ipv4first");
