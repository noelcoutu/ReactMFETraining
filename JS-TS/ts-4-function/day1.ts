{
    type TransactionType = {
        description: string,
        amount: number,
        date: Date
    }

    const transaction1: TransactionType = {
        description: "Deposit",
        amount: 2000,
        date: new Date()
    }

    const transaction2: TransactionType = {
        description: "Withdrawal",
        amount: -500,
        date: new Date()
    }


    const transactionArea: HTMLDivElement = document.getElementById("transactions") as HTMLDivElement;

    const element1 = `<li>${transaction1.date} ${transaction1.description} ${transaction1.amount}</li>`;
    const element2 = `<li>${transaction2.date} ${transaction2.description} ${transaction2.amount}</li>`;

    const ul = `<ul>${element1} ${element2}</ul>`;

    transactionArea.innerHTML = ul;

    type User = {
        name: string,
        age: number,
        loginStatus: boolean
    }

    const user1: User = {
        name: "Alice",
        age: 25,
        loginStatus: true
    }

    const user2: User = {
        name: "Bob",
        age: 30,
        loginStatus: false
    }

    const userArea: HTMLHeadingElement = document.getElementById("userArea") as HTMLHeadingElement;

    const balance = 0;

    const processTransaction = (transaction: TransactionType):number =>{
        const newBalance = balance + transaction.amount
        console.log(`Old balance was ${balance}, new balance is ${newBalance}`);
        return newBalance;
    }

    function displayUser(user: User) {
        userArea.innerHTML = user.loginStatus ? `<div>${user.name} is logged in</div>` : `<div>User is not logged in</div>`
    }

    displayUser(user2);

    const loginUser = (user: User):User =>{
        user.loginStatus = true;
        displayUser(user);
        return user;
    }

}