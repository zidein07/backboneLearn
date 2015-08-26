var app = app || {};

var MODEL = Backbone.Model.extend({
	defaults: {
		'title': '',
		'status': 'active',
		'check': false
	}
});

var COLLECTION = Backbone.Collection.extend({
	model: MODEL
});

var VIEW = Backbone.View.extend({
	initialize: function() {
		this.collection.each(function(coll) {
			console.log(coll.toJSON().title);
		});
	}
});


var collection = new COLLECTION([
	{
		title: 'hello'
	}
]);

$('#but').click(function() {
	var view = new VIEW({collection: collection});
});
