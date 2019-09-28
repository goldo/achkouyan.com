const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {} // We're never in "production server" phase when in development mode
    : !process.env.NOW_REGION
    ? require('next/constants') // Get values from `next` package when building locally
    : require('next-server/constants') // Get values from `next-server` package when building on now v2

const nextJsConfig = {
  target: 'serverless',
}

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return nextJsConfig
  }

  // const withMDX = require('@zeit/next-mdx')({
  //   extension: /.mdx?$/,
  // })

  // return withMDX(nextJsConfig)

  return {
    webpack: cfg => {
      cfg.module.rules.push({
        test: /\.md$/,
        use: 'frontmatter-markdown-loader',
      })
      return cfg
    },
  }
}
