// Criação de classe que lide com dados bancários

class Account {
    private value: number;
    private holder: string;

    constructor (value: number, holder: string){
        this.value = value;
        this.holder = holder;
    } //end constructor

    addAmount (amount: number) : void{
        this.value += amount;
    }
    removeAmount (amount: number) : void{
        this.value -= amount;
    }
    getValue () : number {
        return this.value;
    }
    getHolderName () : string{
        return this.holder;
    }
} //end class

const account: Account = new Account(0, "Diego");

account.addAmount(100);
account.removeAmount(10);

console.log("Saldo atual: R$", account.getValue());