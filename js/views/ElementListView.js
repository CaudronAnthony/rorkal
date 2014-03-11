app.views.ElementListView = Backbone.View.extend({
    el: '#elements',
    render: function() {
        this.$el.empty();
        _.each(this.model.models, function(element) {
            this.$el.append(new app.views.ElementListItemView({model: element}).render().el);
        }, this);
        return this;
    }
});

app.views.ElementListItemView = Backbone.View.extend({
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});