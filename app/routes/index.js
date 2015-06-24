import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
  	console.log('here');
  	// fake. could be something like:
  	// return this.store.find('project', 1);
  	// return {"content": "This right here is content."};
    return {
      "title": "test-doc",
    	"content": 
            [
    	    		[
    	    			"This is the first section. It has subsections. This text is not inside a subsection.\nBreak test.",
    	    			[
    	    				"This is the first subsection of the first section.",
    	    				"This is the second.",
    	    				"And this is the third."
    	    			]
    	    		],
    	    		[
    	    			"This is the 2nd section. It has no subsections."
    	    		],
    	    		[
    	    			"Here we have the third section. It has subsections again.",
    	    			[
    	    				"3rd 1st",
    	    				"3rd 2nd"
    	    			]
    	    		]
    	    	]
    };
  }
});