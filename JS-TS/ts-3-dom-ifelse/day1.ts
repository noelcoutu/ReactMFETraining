{
    // type TransactionType = {
    //     description: string,
    //     amount: number,
    //     date: Date
    // }

    // const transaction1: TransactionType = {
    //     description: "Deposit",
    //     amount: 2000,
    //     date: new Date()
    // }

    // const transaction2: TransactionType = {
    //     description: "Withdrawal",
    //     amount: -500,
    //     date: new Date()
    // }


    // const transactionArea: HTMLDivElement = document.getElementById("transactions") as HTMLDivElement;

    // const element1 = `<li>${transaction1.date} ${transaction1.description} ${transaction1.amount}</li>`;
    // const element2 = `<li>${transaction2.date} ${transaction2.description} ${transaction2.amount}</li>`;

    // const ul = `<ul>${element1} ${element2}</ul>`;

    // transactionArea.innerHTML = ul;

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

    const userArea: HTMLDivElement = document.getElementById("userArea") as HTMLDivElement;

    function displayUser(user: User) {
        if(user.loginStatus){
            const userDiv = `<div>${user.name} is logged in</div>`;
            userArea.innerHTML = userDiv;
        } else {
            const userDiv = `<div>User is not logged in</div>`;
            userArea.innerHTML = userDiv;
        }
    }

    displayUser(user2);
}