app.views.ElementEditView = Backbone.View.extend({
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
    events: {
        'click .back-button': 'back',
        'click .update': 'update'
    },
    back: function(event) {
        window.history.back();
        return false;
    },
    update: function(event) {
        if (this.model.attributes.text !== null) {
            var content = $('#text-content').val();
            var text = new app.models.Text({
                page_element_text_id: this.model.attributes.text.page_element_text_id
            });
            text.fetch({
                success: function() {
                    text.set({
                        'content': content
                    });
                    text.save();
                }
            });
        }
    }
});
