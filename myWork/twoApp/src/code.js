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

var collection = new COLLECTION([
	{
		title: 'hello'
	},
	{
		title: 'hello2'
	},
	{
		title: 'hello123'
	},
	{
		title: 'hello434'
	},
	{
		title: 'hello324234'
	},
	{
		title: 'hello'
	},
	{
		title: 'hello12'
	}
]);

var VIEW = Backbone.View.extend({
	initialize: function() {
		this.collection.each(function(coll) {
			console.log(coll.toJSON().title);
		});
	}
});

var view = new VIEW({collection: collection});
