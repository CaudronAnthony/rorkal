app.views.ArticleRemoveView = Backbone.View.extend({
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});
