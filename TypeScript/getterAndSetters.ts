class MyClass{
    private _myProperty: number;

    constructor(value: number){
        this._myProperty = value;
    }
    get myProperty(): number {
        return this._myProperty;
    }
    set myProperty(value: number) {
        if(value < 0){
            console.log("Value cannot be negative");
        } else {
            this._myProperty = value;
        }
    }
}

const myInstance = new MyClass(10);
console.log(`Current Value: ${myInstance.myProperty}`);
myInstance.myProperty = 20;
console.log(`Updated Value: ${myInstance.myProperty}`);
myInstance.myProperty = -5; // This will trigger the validation