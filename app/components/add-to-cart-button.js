import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  shoppingCart: service(),
  actions: {
  addToCart(book) {
    // debugger;
    // console.log(book.get('title'));
    // debugger;
    this.get('shoppingCart').add(book);
    //console.log('hello world->>>' + this.get('shoppingCart').getItem(0));
    }
  }
});
