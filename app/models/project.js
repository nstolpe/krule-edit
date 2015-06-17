import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  filename: DS.attr('string'),
  content: DS.attr('string')
});