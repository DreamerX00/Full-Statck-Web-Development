enum Rank{
    Junior,
    Mid,
    Senior,
    Lead,
    Manager,
    Director,
    VP,
    CLevel
}

class DXCoxmpany{
    branch : string;
    income : number;
    totalWorkers : number;
    active : boolean;
    public rank : Rank;

    constructor(branch : string,
    income : number,
    totalWorkers : number,
    active : boolean,
    rank : Rank){
        this.branch = branch;
        this.income = income;
        this.totalWorkers = totalWorkers;
        this.active = active;
        this.rank = rank;
    }
    display():void{
        console.log(`Branch : ${this.branch} Income : ${this.income} Total Workers : ${this.totalWorkers} Active : ${this.active} Rank : ${Rank[this.rank]}`);
    }
}

let dxc = new DXCoxmpany("Noida",5000000,2000,true, Rank.Senior);
//write xmore variations of the object
let dxc2 = new DXCoxmpany("Bangalore",7000000,3000,true, Rank.Lead);
let dxc3 = new DXCoxmpany("Chennai",4000000,1500,false, Rank.Manager);
let dxc4 = new DXCoxmpany("Pune",6000000,2500,true, Rank.Director);
let dxc5 = new DXCoxmpany("Hyderabad",5500000,2200,true, Rank.VP);

dxc.display();
dxc2.display();
dxc3.display();
dxc4.display();
dxc5.display();

console.log(`DXC Company Rank is : ${Rank[dxc.rank]}`);

console.log(`DXC Company Rank is : ${Rank[dxc2.rank]}`);
console.log(`DXC Company Rank is : ${Rank[dxc3.rank]}`);
console.log(`DXC Company Rank is : ${Rank[dxc4.rank]}`);
console.log(`DXC Company Rank is : ${Rank[dxc5.rank]}`);

class newCompany extends DXCoxmpany{
    constructor(branch : string,
    income : number,
    totalWorkers : number,
    active : boolean,
    rank : Rank){
        super(branch, income, totalWorkers, active, rank);
    }
}
let newComp = new newCompany("Mumbai",8000000,3500,true, Rank.CLevel);
newComp.display();
console.log(`New Company Rank is : ${Rank[newComp.rank]}`);