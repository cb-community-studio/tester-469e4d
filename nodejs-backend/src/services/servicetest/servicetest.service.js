const { Servicetest } = require('./servicetest.class');
const createModel = require('../../models/servicetest.model');
const hooks = require('./servicetest.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/servicetest', new Servicetest(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('servicetest');

  service.hooks(hooks);
};