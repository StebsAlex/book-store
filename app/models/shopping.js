import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.Model.extend({
  books: DS.hasMany('book'),
  totalPrice: computed('books.[]', function () {
    let total = 0;
    this.get('books').forEach((book) => {
      total += book.get('price');
    });
    return total;
  })
});
