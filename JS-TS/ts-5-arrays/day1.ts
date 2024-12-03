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

    const transactionArea: HTMLDivElement = document.getElementById("transactions-area") as HTMLDivElement;

    // const element1 = `<li>${transaction1.date} ${transaction1.description} ${transaction1.amount}</li>`;
    // const element2 = `<li>${transaction2.date} ${transaction2.description} ${transaction2.amount}</li>`;

    // const ul = `<ul>${element1} ${element2}</ul>`;

    // transactionArea.innerHTML = ul;

    const descInput: HTMLInputElement = document.getElementById("description") as HTMLInputElement;
    const amountInput: HTMLInputElement = document.getElementById("amount") as HTMLInputElement;


    const transactions: TransactionType[] = [];
    const newTransaction = () =>{
        const newTransaction:TransactionType  = {description: descInput.value, amount: Number(amountInput.value), date: new Date()}
        transactions.push(newTransaction)
        console.log(transactions)
    }

}