app.views.ArticleListView = Backbone.View.extend({
    el: '#article',
    render: function() {
        this.$el.empty();
        _.each(this.model.models, function(article) {
            this.$el.append(new app.views.ArticleListItemView({model: article}).render().el);
        }, this);
        return this;
    }
});

app.views.ArticleListItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'panel panel-success',
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }

});