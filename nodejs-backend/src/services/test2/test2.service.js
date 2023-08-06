const { Test2 } = require('./test2.class');
const createModel = require('../../models/test2.model');
const hooks = require('./test2.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/test2', new Test2(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('test2');

  service.hooks(hooks);
};