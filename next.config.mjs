/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Images must be handled differently in static exports
  images: {
    unoptimized: true,
  },
  // This is important for static hosting to work correctly
  trailingSlash: true
}

export default nextConfig
