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

    const transaction3: TransactionType = {...transaction1, description: "Transfer", amount: -1000};

    const {description, amount, date} = transaction3;
    console.log(`Transaction3 - Description: ${description}, Amount: ${amount}, Date: ${date}`);

    // type User = {
    //     name: string,
    //     age: number,
    //     loginStatus: boolean
    // }

    // const user1: User = {
    //     name: "Alice",
    //     age: 25,
    //     loginStatus: true
    // }

    // const user2: User = {
    //     name: "Bob",
    //     age: 30,
    //     loginStatus: false
    // }

    // console.log(user1, user2);

    // console.log(`User 1 Age: ${user1.age}`);

    // const users: User[] = [user1, user2];

    // console.log(users);
    // console.log(users[0]);
    // console.log(users[1]);
    
}