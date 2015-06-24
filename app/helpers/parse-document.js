import Ember from 'ember';

// use this to build the text fields and separators you'll need.
// This should probably be refactored to be a class. See: http://guides.emberjs.com/v1.12.0/object-model/classes-and-instances/
export default Ember.Handlebars.makeBoundHelper(function(content,options) {
	var outputContainer = Ember.$('<div id="output_container"></div>'),
		levels = ['blue', 'red', 'green'];

	function recursiveText(node, level, parent) {
		node.forEach(function(element, index, array) {
			parent.append('<div class="content_wrapper" style="border-color: ' + levels[level] + ';"></div>');
			var container = parent.children('.content_wrapper:last-of-type');

			if(Array.isArray(element)) {
				recursiveText(element, level + 1, container);
				console.log(level);
			} else {
				container.append('<pre class="content ' + level + '" contenteditable>' + element + '</pre>');
			}
		});
	}

	recursiveText(content, 0, outputContainer);

	return new Ember.Handlebars.SafeString(outputContainer.html());
});