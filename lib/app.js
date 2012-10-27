var tpl = 'templates/';

;(function($) {
	var DB = function(app) {
		this.helpers({
			getNextId: function() {
				return store.keys().length + 1;
			},
			insert: function(title) {
				store.set(
					this.getNextId(),
					title
				);
			},
			delete: function(id) {
				store.clear(id);
			},
			getById: function(id) {
				return store.get(id);
			},
			getAll: function() {
			  data = [];
			  store.each(function(key, value) {
				partial = {
					id: key,
					title: value
				};
				data.push(partial);
			  });
			  return data;
			},
			update: function(id,title) {
				store.set(
					id,
					title
				);
			}
		});
	};

	var app = $.sammy('#main',function() {
		this.use('Handlebars', 'hb');
		this.use(DB);

		this.notFound = function(verb, path) {
			this.runRoute('get', '#/404');
		};
		this.get('#/404', function() {
			this.partial(tpl + '404.hb');
		});
		this.get('#/', function() {
			this.data = this.getAll();
			this.partial(tpl + 'list.hb');
		});
		this.get('#/add', function() {
			this.action = 'add';
			this.method = 'post';
			this.partial(tpl + 'form.hb');
		});
		this.post('#/add', function() {
			this.insert(this.params.titulo);
			this.redirect('#/');
		});
		this.del('#/delete/:id', function() {
			this.delete(this.params.id);
			this.redirect('#/');
		});
		this.get('#/edit/:id', function() {
			value = this.getById(this.params.id);
			this.action = 'edit';
			this.method = 'put';
			this.barra_id = '/'+this.params.id;
			this.id = this.params.id;
			this.title = value;
			this.partial(tpl + 'form.hb');
		});
		this.put('#/edit/:id', function() {
			this.update(this.params.id,this.params.titulo);
			this.redirect('#/');
		});
		this.bind('run', function() {
			store = new Sammy.Store({name: 'StoreTodos', type: 'local'});
		});
	});

	$(function() {
		app.run('#/');
	});
})(jQuery);