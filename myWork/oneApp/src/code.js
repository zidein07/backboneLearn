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

var collection = new COLLECTION([{
	title: 'hello'
}]);

console.log(collection.toJSON()[0].title);

var VIEW = Backbone.View.extend({
	
});


