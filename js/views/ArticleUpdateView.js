app.views.ArticleUpdateView = Backbone.View.extend({
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
    events: {
        'click .update': 'update'
    },
    update: function() {
        var title, subtitle, slug;
        title = $('#title').val();
        subtitle = $('#sub_title').val();
        slug = $('#slug').val();
        this.model.set({
            'title': title,
            'sub_title': subtitle,
            'slug': slug
        });
        this.model.save();
        $(location).attr('href', '#article/' + this.model.id);
    }
});
