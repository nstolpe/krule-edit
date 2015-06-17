import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		log: function(html) {
			console.log(html);
		}
	}
});