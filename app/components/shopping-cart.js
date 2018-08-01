import Component from '@ember/component';
import { inject as service } from '@ember/service';
//import { computed } from '@ember/object';

// Length of the shopping cart
export default Component.extend({
  shoppingCart: service(),

});
