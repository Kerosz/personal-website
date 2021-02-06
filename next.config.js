const __PROD__ = process.env.NODE_ENV === 'production';
const withPWA = require('next-pwa');

module.exports = withPWA({
  images: {
    domains: ['cdn.sanity.io'],
  },
  pwa: {
    disable: !__PROD__,
    register: true,
    dest: 'public',
  },
});
