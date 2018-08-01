import { module, test } from 'qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';
import {
  click,
  currentURL,
  visit,
  //pauseTest
} from '@ember/test-helpers'
import { setupApplicationTest } from 'ember-qunit';
import $ from 'jquery';


module('Acceptance | list rentals', function(hooks) {
  setupApplicationTest(hooks);
   setupMirage(hooks);


  test('should show book-store as the home page', async function (assert) {
    await visit('/');
    assert.equal(currentURL(), '/book-list', 'should redirect automatically');
    });


   test('should link to information about the company.', async function (assert) {
     await visit('/');
     await click('.menu-about');
     assert.equal(currentURL(), '/about', 'redirected to the about page');
   });

   test('happy path: add book, then remove book.', async function(assert){
     //Add book to cart
     await visit('/');
     await click('.addToCart');
     assert.equal($('.cart').text().trim(), 'Items: 1', 'There is one items');
     //Remove book from cart
     await click('.cart');
     await click('.removeItem');
     assert.equal($('article').length , 0, 'basket is empty');
   }

 )

   //
   // test('should list available rentals.', async function (assert) {
   // });
   //
   //
   // test('should show details for a selected rental', async function (assert) {
   // });

});
