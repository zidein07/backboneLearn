var app = app || {};

var MODEL = Backbone.Model.extend({
	defaults: {
		title: '',
		status: 'active',
		check: false
	}
});

var COLLECTION = Backbone.Collection.extend({
	model: MODEL,
	changeFile: function() {
		this.collection.on('change:title',function() {
			console.log('file change');
		});
	}
});

var VIEW = Backbone.View.extend({
	template: _.template( $('#contant').html() ),
	initialize: function() {
		this.render();
	},
	render: function() {
		var self = this;
		this.collection.each(function(col) {
			self.$el.append(self.template(col.toJSON()))
		});
	},
	addItem: function() {
		this.collection.add({
			title: $('#text').val()
		});
		console.log(collection);
	}
});


var collection = new COLLECTION(
{
	title: 'TitleN'
});

var view = new VIEW({collection: collection,el:'#block ul'});

$('#but').click(function() {
	view.addItem();
	view.render();
});