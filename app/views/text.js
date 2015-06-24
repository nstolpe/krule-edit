import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function ()  {
		console.log('yo suck');
	  Ember.run.scheduleOnce('afterRender', this, function() {
	    this.$('.content').keydown(function(e) {
	    	console.log('hi');
	    });
	  });  
	}
});