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
		$('#block ul li').remove(),
		this.collection.each(function(col) {
			this.$el.append(this.template(col.toJSON()))
		},this);
	},
	addItem: function() {
		this.collection.add({
			title: $('#text').val()
		});
		console.log(collection);
	}
});


var collection = new COLLECTION(
{});

var view = new VIEW({collection: collection,el:'#block ul'});

$('#but').click(function() {
	view.addItem();
	view.render();
});