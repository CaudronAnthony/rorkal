app.utils.util = (function() {

    var status = 'production';

    var getHoursMinutes = function(date) {
        return date.substring(11, 13) + ':' + date.substring(14, 16);
    };
    
    var serverAPI = (status === 'development') ? 'http://localhost/Rorkal_directory/rorkalRestApi' : 'http://api.rorkal.be';
    var server = (status === 'development') ? 'http://localhost/rorkal' : 'http://rorkal.be';
    
    var username = 'rorkal';
    var password = 'rorkalbokal';
    
    var auth = window.btoa(username + ':' + password);

    return {
        getHoursMinutes: getHoursMinutes,
        server: server,
        serverAPI: serverAPI,
        username: username,
        password: password,
        auth: auth
    };

}());