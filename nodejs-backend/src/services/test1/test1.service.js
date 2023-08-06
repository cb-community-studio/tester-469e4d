const { Test1 } = require('./test1.class');
const createModel = require('../../models/test1.model');
const hooks = require('./test1.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/test1', new Test1(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('test1');

  service.hooks(hooks);
};