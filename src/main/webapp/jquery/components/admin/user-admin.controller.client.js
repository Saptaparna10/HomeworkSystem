(function () {
    var usernameFld, passwordFld;
    var removeBtn, editBtn, createBtn;
    var firstNameFld, lastNameFld, roleFld;
    var userRowTemplate, tbody;
    var userService = new UserServiceClient()

    $(main);

    function main() {
        $('#createUser').click(createUser);
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
    }
    function findUserById() {
        console.log('findUserById');
    }
    function deleteUser() {
        console.log('deleteUser');
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
    }
})();
