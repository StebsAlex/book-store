import Component from '@ember/component';
import { inject as service } from '@ember/service';
//import { computed } from '@ember/object';

export default Component.extend({
  shoppingCart: service(),
  actions: {
    removeItem(book){
      //console.log(book.get('title'));
      this.get('shoppingCart').remove(book);
      //console.log('kelly');
    }
  }
});
