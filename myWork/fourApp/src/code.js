var app = app || {};

var MODEL = Backbone.Model.extend({
	defaults: {
		'title': '',
		'status': 'active',
		'check': false
	}
});

var COLLECTION = Backbone.Collection.extend({
	model: MODEL,
});

var VIEW = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	render: function() {
		this.collection.add({
			title: $('#text').val()
		});
		console.log(collection);
	}
});


var collection = new COLLECTION();

var view = new VIEW({collection: collection});

$('#but').click(function() {
	view.render();
});