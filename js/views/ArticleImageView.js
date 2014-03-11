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
            // destinationType: Camera.DestinationType.FILE_URI
        });

        function onSuccess(imageURI) {
            var image = document.getElementById('myImage');
            image.src = imageURI;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }

        // navigator.device.capture.captureImage(function(mediaFiles) {
        //     var i, path, len;
        //     for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        //         path = mediaFiles[i].fullPath;                $('#elements').html('<p>' + path + '<p>');
        //     }
        // }, function(error) {
        //     navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        // }, {limit: 1});
    }
});
