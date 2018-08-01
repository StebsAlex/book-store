import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | remove-button', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders button with Remobe Button text', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{remove-button}}`);

    assert.equal(this.element.textContent.trim(), 'Remove Item', 'Remove from cart text is working');
  });
});
