app.models.Text = Backbone.Model.extend({
    idAttribute: 'page_element_text_id',
    urlRoot: app.utils.util.serverAPI + '/public/index.php/api/v1/text'
});

app.models.TextCollection = Backbone.Collection.extend({
    model: app.models.Text,
    url: app.utils.util.serverAPI + '/public/index.php/api/v1/text'
});

app.models.Text.credentials = function() {
    return {
        username: app.utils.util.username,
        password: app.utils.util.password
    };
};