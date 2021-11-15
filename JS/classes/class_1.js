class CoffeeMachine{
    _waterAmount = 0; // Protected props are prefixed with "_"

    #waterLimit = 200;

    constructor(power){
        this._power = power
    }

    set waterAmount(value){
        if(value < 0){
            value = 0;
        }
        this._waterAmount = value;
    }

    get waterAmount(){
        return this._waterAmount;
    }
    
    getWaterAmount(){
        return this._waterAmount;
    }
}

let cm = new CoffeeMachine(100);

cm.waterAmount = -10;

console.log(cm.waterAmount)

