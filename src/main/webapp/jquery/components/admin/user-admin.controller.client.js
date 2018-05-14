(function () {
    var usernameFld, passwordFld;
    var removeBtn, editBtn, createBtn;
    var firstNameFld, lastNameFld, roleFld;
    var userRowTemplate, tbody;
    var userService = new UserServiceClient()

    $(main);

    function main() {
        tbody = $('tbody');
        userRowTemplate = $('.wbdv-template');
        $('#createUser').click(createUser);
        $('#wbdv-remove').click(deleteUser);

        findAllUsers();
    }
    function createUser() {
        console.log('createUser');

        usernameFld = $('#usernameFld').val();
        passwordFld = $('#passwordFld').val();
        firstNameFld = $('#firstNameFld').val();
        lastNameFld = $('#lastNameFld').val();
        roleFld = $('#roleFld').val();

        var user = {
            username: usernameFld,
            password: passwordFld,
            firstName: firstNameFld,
            lastName: lastNameFld
        };

        userService
            .createUser(user)
            .then(findAllUsers);

    }
    function findAllUsers() {
        console.log('findAllUsers');
        userService
            .findAllUsers()
            .then(renderUsers);
    }
    function findUserById() {
        console.log('findUserById');

    }
    function deleteUser() {
        console.log('deleteUser');
        removeBtn = $(event.currentTarget);
        var userId = removeBtn
            .parent()
            .parent()
            .attr('id');

        userService
            .deleteUser(userId)
            .then(findAllUsers);
    }
    function selectUser() {
        console.log('selectUser');
    }
    function updateUser() {
        console.log('updateUser');
    }
    function renderUser(user) {
        console.log('renderUser');
    }
    function renderUsers(users) {
        console.log('renderUsers');
        tbody.empty();
        for(var i=0; i<users.length; i++) {
            var user = users[i];
            var clone = userRowTemplate.clone();

            clone.attr('id', user.id);

            clone.find('.wbdv-remove').click(deleteUser);
            //clone.find('.edit').click(editUser);

            clone.find('.wbdv-username')
                .html(user.username);
            clone.find('.wbdv-first-name')
                .html(user.firstName);
            clone.find('.wbdv-last-name')
                .html(user.lastName);

            tbody.append(clone);
        }
    }
})();
