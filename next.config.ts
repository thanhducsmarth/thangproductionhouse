const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: isGithubActions ? '/thangproduction' : '',
  basePath: isGithubActions ? '/thangproduction' : '',
}

module.exports = nextConfig
