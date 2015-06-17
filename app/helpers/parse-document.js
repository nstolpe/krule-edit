import Ember from 'ember';

// use this to build the text fields and separators you'll need.
export default Ember.Handlebars.makeBoundHelper(function(content,options) {
	var outputContainer = $('<div></div>');

	function recursiveText(node) {
		node.forEach(function(element, index, array) {
			if(Array.isArray(element)) {
				recursiveText(element);
			} else {
				outputContainer.append('<textarea>' + element + '</textarea>');
			}
		});
	}

	recursiveText(content);

	return new Ember.Handlebars.SafeString(outputContainer.html());
});