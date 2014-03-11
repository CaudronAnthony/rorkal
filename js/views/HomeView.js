app.views.HomeView = Backbone.View.extend({
    initialize: function() {
        this.articles = new app.models.ArticleCollection();
        this.articles.fetch({
            reset: true
        });
        this.render();

        this.listenTo(this.articles, 'reset', this.renderArticles);
    },
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    renderArticles: function() {
        this.articleView = new app.views.ArticleListView({model: this.articles});
        this.articleView.render();
    }
});