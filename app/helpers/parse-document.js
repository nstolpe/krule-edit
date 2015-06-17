import Ember from 'ember';

// use this to build the text fields and separators you'll need.
export default Ember.Handlebars.makeBoundHelper(function(content,options) {
	function foo(content) {
		console.log(content);
	}
	for (var i = 0, l = content.length; i < l; i++) {
		if (Array.isArray(content))
	}
	foo('value');
	return JSON.stringify(content);
});