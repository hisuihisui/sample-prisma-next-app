/** @type {import('next').NextConfig} */
const nextConfig = {
  // 全ての API routes にマッチ
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "https://sample-prisma-next-app.vercel.app",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,POST",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "XContent-Type",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
