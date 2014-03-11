app.models.Element = Backbone.Model.extend({
    idAttribute: 'page_element_id',
    urlRoot: app.utils.util.serverAPI + '/public/index.php/api/v1/element'
});

app.models.ElementCollection = Backbone.Collection.extend({
    model: app.models.Element,
    url: app.utils.util.serverAPI + '/public/index.php/api/v1/element'
});

app.models.Element.credentials = function() {
    return {
        username: app.utils.util.username,
        password: app.utils.util.password
    };
};