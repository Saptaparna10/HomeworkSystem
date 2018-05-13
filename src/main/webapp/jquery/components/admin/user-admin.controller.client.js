(function () {
    var usernameFld, passwordFld;
    var removeBtn, editBtn, createBtn;
    var firstNameFld, lastNameFld, roleFld;
    var userRowTemplate, tbody;
    var userService = new AdminUserServiceClient();
    $(main);

    function main() {
        var usernameFld = $('#usernameFld').val();
        var passwordFld = $('#passwordFld').val();
        var firstNameFld = $('#firstNameFld').val();
        var lastNameFld = $('#lastNameFld').val();
        var roleFld = $('#roleFld').val();
    }
    function createUser() {
        console.log('createUser');
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
