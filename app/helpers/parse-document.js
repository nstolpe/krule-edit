import Ember from 'ember';

// use this to build the text fields and separators you'll need.
export default Ember.Handlebars.makeBoundHelper(function(value,options) {
	console.log(value);
	return JSON.stringify(value);
});