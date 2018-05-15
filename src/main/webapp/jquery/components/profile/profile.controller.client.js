(function() {
    $(init);

    var $staticEmail;
    var $firstName;
    var $lastName;
    var $updateBtn;
    var profile;
    var userService = new UserServiceClient();

    function init() {
        $staticEmail = $("#staticEmail");
        $firstName = $("#firstName");
        $lastName = $("#lastName");
        profile = $('#profile');
        $updateBtn = $("#updateBtn")
            .click(updateUser);
        var pathArray = window.location.href.split( '?' );
        var userIdArray = pathArray[pathArray.length-1].split('=');
        var userId=userIdArray[userIdArray.length-1];
        console.log('User ID!!!' + userId);
        findUserById(userId);
    }

    function updateUser() {
        var user = {
            firstName: $firstName.val(),
            lastName: $lastName.val()
        };

        var userId = profile.attr('id');
        userService
            .updateUser(userId, user)
            .then(success);
    }

    function success(response) {
        if(response === null) {
            alert('unable to update')
        } else {
            alert('success');
        }
    }

    function findUserById(userId) {
        userService
            .findUserById(userId)
            .then(renderUser);
    }

    function renderUser(user) {
        console.log(user);
        $staticEmail.val(user.username);
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
        profile.attr('id', user.id);
    }
})();