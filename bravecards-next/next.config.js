/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
  env: {
    myCustomEnvirement: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
},
reactStrictMode: true,
trailingSlash: true,
}

module.exports = nextConfig