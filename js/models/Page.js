app.models.Page = Backbone.Model.extend({
    idAttribute: 'page_id',
    urlRoot: app.utils.util.serverAPI + '/public/index.php/api/v1/page'
});

app.models.PageCollection = Backbone.Collection.extend({
    model: app.models.Page,
    url: app.utils.util.serverAPI + '/public/index.php/api/v1/page'
});

app.models.Page.credentials = function() {
    return {
        username: app.utils.util.username,
        password: app.utils.util.password
    };
};