const assert = require('assert');
const app = require('../../src/app');

describe('\'test2\' service', () => {
  it('registered the service', () => {
    const service = app.service('test2');

    assert.ok(service, 'Registered the service (test2)');
  });
});
