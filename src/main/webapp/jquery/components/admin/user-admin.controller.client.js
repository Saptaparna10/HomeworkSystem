(function () {
    var usernameFld, passwordFld;
    var removeBtn, editBtn, createBtn;
    var firstNameFld, lastNameFld, roleFld;
    var userRowTemplate, tbody, thead;
    var userService = new UserServiceClient()

    $(main);

    function main() {
        tbody = $('tbody');
        thead = $('thead');
        userRowTemplate = $('.wbdv-template');
        $('#createUser').click(createUser);
        $('#wbdv-remove').click(deleteUser);
        $('#updateUser').click(saveToDB);

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
            .then(removeInput)
            .then(findAllUsers);

    }
    function findAllUsers() {
        console.log('findAllUsers');
        userService
            .findAllUsers()
            .then(renderUsers);
    }
    function findUserById(userId) {
        console.log('findUserById');
        userService
            .findUserById(userId)
            .then(renderUser);
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

        editBtn = $(event.currentTarget);
        var userId = editBtn
            .parent()
            .parent()
            .attr('id');

        findUserById(userId);
    }

    function saveToDB(){
        usernameFld = $('#usernameFld').val();
        passwordFld = $('#passwordFld').val();
        firstNameFld = $('#firstNameFld').val();
        lastNameFld = $('#lastNameFld').val();
        roleFld = $('#roleFld').val();

        var userId = thead.attr('id');

        var user = {
            username: usernameFld,
            password: passwordFld,
            firstName: firstNameFld,
            lastName: lastNameFld
        };

        userService
            .updateUser(userId, user)
            .then(removeInput)
            .then(findAllUsers)
    }

    function removeInput(){
        $('#usernameFld').val('');
        $('#passwordFld').val('');
        $('#firstNameFld').val('');
        $('#lastNameFld').val('');
    }

    function renderUser(user) {
        console.log('renderUser');
        thead.attr('id', user.id);
        thead.find('#usernameFld').val(user.username);
        thead.find('#passwordFld').val(user.password);
        thead.find('#firstNameFld').val(user.firstName);
        thead.find('#lastNameFld').val(user.lastName);
    }

    function renderUsers(users) {
        console.log('renderUsers');
        tbody.empty();
        for(var i=0; i<users.length; i++) {
            var user = users[i];
            var clone = userRowTemplate.clone();

            clone.attr('id', user.id);

            clone.find('.wbdv-remove').click(deleteUser);
            clone.find('.wbdv-edit').click(updateUser);

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
