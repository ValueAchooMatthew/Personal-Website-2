/** @type {import('next').NextConfig} */
const nextConfig = {
  // /resume (and the old /Resume.pdf link) point at the current résumé,
  // so swapping in a new PDF only means changing RESUME below.
  async redirects() {
    const RESUME = '/Matthew-Farah-Resume.pdf'
    return [
      { source: '/resume', destination: RESUME, permanent: false },
      { source: '/Resume.pdf', destination: RESUME, permanent: false },
    ]
  },
}

module.exports = nextConfig
