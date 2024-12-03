{
    var transaction1 = {
        description: "Deposit",
        amount: 2000,
        date: new Date()
    };
    var transaction2 = {
        description: "Withdrawal",
        amount: -500,
        date: new Date()
    };
    var transactionArea = document.getElementById("transactions");
    var element1 = "<li>".concat(transaction1.date, " ").concat(transaction1.description, " ").concat(transaction1.amount, "</li>");
    var element2 = "<li>".concat(transaction2.date, " ").concat(transaction2.description, " ").concat(transaction2.amount, "</li>");
    var ul = "<ul>".concat(element1, " ").concat(element2, "</ul>");
    transactionArea.innerHTML = ul;
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
    var balance_1 = 0;
    var processTransaction = function (transaction) {
        var newBalance = balance_1 + transaction.amount;
        console.log("Old balance was ".concat(balance_1, ", new balance is ").concat(newBalance));
        return newBalance;
    };
    function displayUser(user) {
        userArea_1.innerHTML = user.loginStatus ? "<div>".concat(user.name, " is logged in</div>") : "<div>User is not logged in</div>";
    }
    displayUser(user2);
    var loginUser = function (user) {
        user.loginStatus = true;
        displayUser(user);
        return user;
    };
}
