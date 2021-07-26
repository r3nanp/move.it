const withPWA = require('next-pwa')

const isProd = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  // Enable PWA features
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com', 'localhost']
  }
})
