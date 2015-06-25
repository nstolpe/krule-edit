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
    	    			"Chapter 1\nIn which Aruh Vrehreera suffers the aftermath of his brother Orlo's wedding in the city of Lur, journeys to the city of Stones Cross, and has a tense conversation with the Prince who invited him there.",
    	    			[
    	    				"Aruh returns to his inn with the start of a still waking hangover acquired during three days of partying. He receives a message from a Prince of Stones Cross that was delivered by a Transaxos agent and decides to leave the city to learn of the employment opportunity.",
    	    				"Aruh travels by horse to Stones Cross. He wishes he had a room on the giant lizard thing that I can't remember the name of.",
    	    				"Aruh reaches Stones Cross and ruminates on the city. He meets the Prince who requested his presence and dscusses ."
    	    			]
    	    		],
    	    		[
    	    			"Chapter 2\nIn which Aruh and his compantions journey to the slaver camp he has agreed to infiltrate."
                [
                  "Aruh and his companionts Ulm, Mwohl, and Uhl discover a caravan recently ambushed by the slavers. Aruh disguises himself as an unconscious caravan guard so he will be brought to the camp. He meets Slios in the slave pen and reveals his identity as an Ansali Saijin as well as his plans to liberate the prisoners.",
                  "Aruh is brought to the slavers' sorceress who quickly sees through his cover story. She is there with ulterior motives as well and an alliance is formed."
                ]
    	    		],
    	    		[
    	    			"Chapter 3\nIn which the imprisoned slaves are liberated, Aruh has a frank discussion with the Prince who hired him, and the first Princess of Stones Cross ascends."
    	    		]
    	    	]
    };
  }
});