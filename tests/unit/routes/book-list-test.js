import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bookList', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:book-list');
    assert.ok(route);
  });
});
