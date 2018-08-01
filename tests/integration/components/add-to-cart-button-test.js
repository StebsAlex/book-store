import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import sinon from 'sinon';
import hbs from 'htmlbars-inline-precompile';


module('Integration | Component | add-to-cart-button', function(hooks) {
  setupRenderingTest(hooks);



  test('it renders button with Add to cart text', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    await render(hbs`{{add-to-cart-button}}`);
    assert.equal(this.element.textContent.trim(), 'Add to Cart', 'Add to Cart text works');
  });

  test('should be able to initiase the addtocart action', async function(assert) {

    const stub = sinon.stub();
    const shoppingCart =  {
      add: stub
    }
    this.set('shoppingCart', shoppingCart);
    assert.expect(1);

    await render(hbs`{{add-to-cart-button shoppingCart=shoppingCart}}`);
    // this.$('.addToCart').click()
    await click('.addToCart');
    assert.ok(stub.called, 'called the action');
  });




});
