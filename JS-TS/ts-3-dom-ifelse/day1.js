{
    var user1 = {
        name: "Alice",
        age: 25,
        loginStatus: true
    };
    var user2 = {
        name: "Bob",
        age: 30,
        loginStatus: false
    };
    var userArea_1 = document.getElementById("userArea");
    function displayUser(user) {
        if (user.loginStatus) {
            var userDiv = "<div>".concat(user.name, " is logged in</div>");
            userArea_1.innerHTML = userDiv;
        }
        else {
            var userDiv = "<div>User is not logged in</div>";
            userArea_1.innerHTML = userDiv;
        }
    }
    displayUser(user1);
}
