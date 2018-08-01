import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';


module('Integration | Component | book-listing', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.book = EmberObject.create({
      image: 'fake.png',
      title: 'test-title',
      author: 'test-owner',
      price: 10
    });
  });


  test('should display book details', async function(assert) {
   await render(hbs`{{book-listing book=book}}`);
   assert.equal(this.element.querySelector('.listing h3').textContent.trim(), 'test-title', 'Title: test-title');
   assert.equal(this.element.querySelector('.listing .owner').textContent.trim(), 'Author: test-owner', 'Author: test-owner');
  });


});
