const routes = require('next-routes')();

routes
  .add('/fundraisers/new', '/fundraisers/new')
  .add('/fundraisers/:address', '/fundraisers/show')

module.exports = routes;
