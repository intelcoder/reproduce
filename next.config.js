const path = require('path')
const withImages = require('next-images')
module.exports = withImages({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.Components = path.join(__dirname, 'components')
    config.resolve.alias.Containers = path.join(__dirname, 'containers')
    config.resolve.alias.Redux = path.join(__dirname, 'redux')
    config.resolve.alias.Public = path.join(__dirname, 'public')
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    // Important: return the modified config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))
    return config
  },
  webpackDevMiddleware: config =>
    // Perform customizations to webpack dev middleware config
    // Important: return the modified config
    config,
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    apiUrl: 'https://api.test.ca',
    staticFolder: '/static',
  },
})
