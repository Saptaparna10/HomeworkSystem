(function () {
    var usernameFld, passwordFld, verifyPasswordFld;
    var registerBtn;
    var userService = new UserServiceClient()

    $(main);

    function main() {
        $('#registerBtn').click(register);
    }
    function register() {
        console.log('registerUser');

        usernameFld = $('#usernameFld').val();
        passwordFld = $('#passwordFld').val();
        verifyPasswordFld = $('#verifyPasswordFld').val();

        if(passwordFld === verifyPasswordFld){
            var user = {
                username: usernameFld,
                password: passwordFld
            };

            userService
                .register(user)
                //.then(removeInput)
                //.then(findAllUsers);
        }
        else{
            alert('passwords not matching');
        }
        }

})();
