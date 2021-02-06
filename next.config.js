const withPWA = require('next-pwa');

module.exports = withPWA({
  images: {
    domains: ['cdn.sanity.io'],
  },
  pwa: {
    dest: 'public',
  },
});
