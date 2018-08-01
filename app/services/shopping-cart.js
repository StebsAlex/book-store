import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
  store: service(),
  init() {
    this._super(...arguments);
    this.set('basket', [])
  },
  add(book) {
    const basketItemsWithBook = this.get('basket').filter((basketItem) => {
      return basketItem.get('book.id') === book.get('id');
    })
    const basketItem = basketItemsWithBook[0];
    if (basketItemsWithBook.length) {
      basketItem.incrementProperty('quantity', 1);
    } else {
      const basketItem = this.get('store').createRecord('basket-item', {
        book,
        quantity: 1
      });
      this.get('basket').pushObject(basketItem);
    }
  },
  remove(book) {
    const basketItemsWithBook = this.get('basket').filter((basketItem) => {
      return basketItem.get('book.id') === book.get('id');
    })
    const basketItem = basketItemsWithBook[0];
    if (basketItem.quantity > 1) {
      basketItem.decrementProperty('quantity', 1);
    } else {
      this.get('basket').removeObject(basketItem);
    }
  },
});
