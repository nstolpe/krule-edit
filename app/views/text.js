import Ember from 'ember';
/*
 * Catches the enter press in a contenteditable pre element and inserts a newline character
 * instead of a div.
 *
 * Runs afterRender since the HTML is created by a helper function.
 */
export default Ember.View.extend({
	didInsertElement: function ()  {
	  Ember.run.scheduleOnce('afterRender', this, function() {
	    this.$('.content').keydown(function(e) {
	    	if (e.keyCode === 13) {
				document.execCommand('insertHTML', false, '\n');
				return false;
	    	}
	    });
	  });  
	}
});