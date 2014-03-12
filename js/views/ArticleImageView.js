app.views.ArticleImageView = Backbone.View.extend({
    render: function() {
        this.$el.html(this.template(this.model.attributes));
        return this;
    },
    events: {
        'click .picture': 'picture'
    },
    picture: function() {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            saveToPhotoAlbum: true
            // destinationType: Camera.DestinationType.FILE_URI
        });

        function onSuccess(imageURI) {
            alert(imageURI);
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }
});
