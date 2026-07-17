/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/restaurants-hospitality",
        destination: "/restaurants",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
