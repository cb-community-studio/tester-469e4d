const assert = require('assert');
const app = require('../../src/app');

describe('\'servicetest\' service', () => {
  it('registered the service', () => {
    const service = app.service('servicetest');

    assert.ok(service, 'Registered the service (servicetest)');
  });
});
