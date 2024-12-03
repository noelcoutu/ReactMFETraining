var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
    var transaction3 = __assign(__assign({}, transaction1), { description: "Transfer", amount: -1000 });
    var description = transaction3.description, amount = transaction3.amount, date = transaction3.date;
    console.log("Transaction3 - Description: ".concat(description, ", Amount: ").concat(amount, ", Date: ").concat(date));
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
