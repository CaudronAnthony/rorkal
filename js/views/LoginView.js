app.views.LoginView = Backbone.View.extend({
    render: function() {
        this.$el.html(this.template());
        return this;
    },
    events: {
        'click .login-form': 'submit'
    },
    submit: function() {
        $('#error').text('');
        var email, password, data;
        email = $('#email').val();
        password = $('#password').val();
        data = {
            'email': email,
            'password': password
        };
        $.ajax({
            url: app.utils.util.serverAPI + '/public/index.php/api/v1/user',
            type: 'POST',
            data: data,
            dataType: 'json',
            username: app.utils.util.username,
            password: app.utils.util.password,
            success: function(data) {
                if (data === true) {
                    $(location).attr('href', '#home');
                } else {
                    $('#error').text('ERREUR gros naze !');
                }
            }
        });
    }
});
