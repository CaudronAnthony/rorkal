var app = {
    views: {},
    models: {},
    routers: {},
    utils: {}
};

$(document).on('ready', function() {
    app.router = new app.routers.AppRouter();
    app.utils.templates.load([
        'HomeView',
        'ArticleListItemView',
        'ArticleView',
        'ElementListItemView',
        'ElementEditView',
        'LoginView',
        'ArticleRemoveView',
        'ArticleUpdateView',
        'ArticleImageView'
    ],
            function() {
                app.router = new app.routers.AppRouter();
                Backbone.history.start();
            });
});