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
    var transactionArea = document.getElementById("transactions-area");
    // const element1 = `<li>${transaction1.date} ${transaction1.description} ${transaction1.amount}</li>`;
    // const element2 = `<li>${transaction2.date} ${transaction2.description} ${transaction2.amount}</li>`;
    // const ul = `<ul>${element1} ${element2}</ul>`;
    // transactionArea.innerHTML = ul;
    var descInput_1 = document.getElementById("description");
    var amountInput_1 = document.getElementById("amount");
    var transactions_1 = [];
    var newTransaction = function () {
        var newTransaction = { description: descInput_1.value, amount: Number(amountInput_1.value), date: new Date() };
        transactions_1.push(newTransaction);
        console.log(transactions_1);
    };
}
