import Ember from 'ember';
/*
 * Catches the enter press in a contenteditable pre element and inserts a newline character
 * instead of a div.
 */
export default Ember.View.extend({
	didInsertElement: function ()  {
	    this.$('.content').keydown(function(e) {
	    	if (e.keyCode === 13) {
				document.execCommand('insertHTML', false, '\n');
				return false;
	    	}
	    });
	}
});