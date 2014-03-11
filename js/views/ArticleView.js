app.views.ArticleView = Backbone.View.extend({
    initialize: function() {
        this.pages = new app.models.PageCollection();
        this.pages.where({
            class_id: this.model.attributes.article_id,
            class_name: 'article'
        });
        this.pages.fetch({reset: true});

        this.listenTo(this.pages, 'reset', this.renderPage);
    },
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
    renderPage: function() {
        this.pages = this.pages.where({
            class_id: this.model.attributes.article_id,
            class_name: 'article'
        });
        this.elements = new app.models.ElementCollection();
        this.elements.comparator = 'position';
        this.elements.fetch({reset: true});

        this.listenTo(this.elements, 'reset', this.renderElements);
    },
    renderElements: function() {
        this.elements = this.elements.where({
            page_id: _.first(this.pages).attributes.page_id
        });
        this.elements = new app.models.ElementCollection(this.elements);
        this.elementView = new app.views.ElementListView({model: this.elements});
        this.elementView.render();
    }
});
