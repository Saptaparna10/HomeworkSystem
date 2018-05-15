function UserServiceClient() {
    this.createUser = createUser;
    this.findAllUsers = findAllUsers;
    this.findUserById = findUserById;
    this.deleteUser = deleteUser;
    this.updateUser = updateUser;
    this.url = 'http://localhost:8080/api/user';
    this.register_url = 'http://localhost:8080/api/register';
    this.login_url = 'http://localhost:8080/api/login';
    var self = this;
    this.register = register;
    this.login = login;

  function login(user, callback) {
      return fetch(self.login_url, {
          method: 'post',
          body: JSON.stringify(user),
          headers: {
              'content-type': 'application/json'
          }
      });
  }

    function register(user, callback) {
        return fetch(self.register_url, {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    function createUser(user, callback) {
        return fetch(self.url, {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        });
    }
    function findAllUsers(callback) {
        return fetch(self.url)
            .then(function (response) {
                return response.json();
            });
    }
    function findUserById(userId, callback) {
        return fetch(self.url + '/' + userId)
            .then(function(response){
                return response.json();
            });
    }
    function updateUser(userId, user, callback) {
        return fetch(self.url + '/' + userId, {
            method: 'put',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function(response){
                if(response.ok) {
                    return response.json();
                } else {
                    return null;
                }
            });
    }
    function deleteUser(userId, callback) {
        return fetch(self.url + '/' + userId, {
            method: 'delete'
        });
    }
}
