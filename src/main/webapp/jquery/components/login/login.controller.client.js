(function () {
    var usernameFld, passwordFld;
    var loginBtn;
    var userService = new UserServiceClient()
    $(main);

    function main() {
        $('#signin').click(login);
    }
    function login() {
        console.log('login');

        usernameFld = $('#username').val();
        passwordFld = $('#password').val();

        var user = {
            username: usernameFld,
            password: passwordFld,
        };

        userService
            .login(user)
            .then(success)

    }

    function success(response) {
        if(response === null) {
            alert('unable to login')
        } else {
            alert('success');
            response.json().then(parse);
        }
    }

    function parse(json){
        window.location.href ="../profile/profile.template.client.html?userId="+json['id'];
    }
})();
