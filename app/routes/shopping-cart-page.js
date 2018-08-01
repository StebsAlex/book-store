import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
//import { computed } from '@ember/object';

export default Route.extend({
  shoppingCart: service(),

});
