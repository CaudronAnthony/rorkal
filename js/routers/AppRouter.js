app.routers.AppRouter = Backbone.Router.extend({
    routes: {
        // '': 'login',
        'home': 'home',
        '': 'home',
        'article/:id': 'article',
        'article/update/:id': 'articleUpdate',
        'article/image/:id': 'articleImage',
        'article/remove/:id': 'articleRemove',
        'element/edit/:id': 'editElement'
    },
    initialize: function() {
        app.slider = new PageSlider($('body'));
    },
    home: function() {
        if (!app.homeView) {
            app.homeView = new app.views.HomeView();
            app.homeView.render();
        } else {
            app.homeView.delegateEvents();
        }
        app.slider.slidePage(new app.views.HomeView().render().$el);
    },
    // home: function() {
    //     app.slider.slidePage(new app.views.HomeView().render().$el);
    // },
    article: function(id) {
        var article = new app.models.Article({article_id: id});
        article.fetch({
            success: function(data){
                app.slider.slidePage(new app.views.ArticleView({model: data}).render().$el);
            }
        });
    },
    articleUpdate: function(id) {
        var article = new app.models.Article({article_id: id});
        article.fetch({
            success: function(data){
                app.slider.slidePage(new app.views.ArticleUpdateView({model: data}).render().$el);
            }
        });
    },
    articleImage: function(id) {
        var article = new app.models.Article({article_id: id});
        article.fetch({
            success: function(data){
                app.slider.slidePage(new app.views.ArticleImageView({model: data}).render().$el);
            }
        });
    },
    articleRemove: function(id) {
        var article = new app.models.Article({article_id: id});
        article.fetch({
            success: function(data){
                app.slider.slidePage(new app.views.ArticleRemoveView({model: data}).render().$el);
            }
        });
    },
    editElement: function(id) {
        var element = new app.models.Element({page_element_id: id});
        element.fetch({
            success: function(data){
                app.slider.slidePage(new app.views.ElementEditView({model: data}).render().$el);
            }
        });
    },
    login: function() {
        if (!app.homeView) {
            app.homeView = new app.views.LoginView();
            app.homeView.render();
        } else {
            app.homeView.delegateEvents();
        }
        app.slider.slidePage(new app.views.LoginView().render().$el);
    }
});
