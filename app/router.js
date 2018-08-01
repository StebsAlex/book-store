import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('book-list');
  this.route('shopping-cart-page');
  this.route('book',  {path: 'book-list/:book_id'})
});

export default Router;
