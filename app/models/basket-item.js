import DS from 'ember-data';

export default DS.Model.extend({
  book: DS.belongsTo('book'),
  //shoppings: DS.hasMany('shopping'),
  quantity : DS.attr('number')
});
