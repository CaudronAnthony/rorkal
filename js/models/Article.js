app.models.Article = Backbone.Model.extend({
    idAttribute: 'article_id',
    urlRoot: app.utils.util.serverAPI + '/public/index.php/api/v1/article'
});
app.models.ArticleCollection = Backbone.Collection.extend({
    model: app.models.Article,
    url: app.utils.util.serverAPI + '/public/index.php/api/v1/article'
});

app.models.Article.credentials = function() {
    return {
        username: app.utils.util.username,
        password: app.utils.util.password
    };
};