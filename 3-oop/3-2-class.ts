{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        // static을 붙이면 class와 연결되어 있기 때문에 object 마다 만들어 지거나 생성되지 않는다. 
        coffeeBeans: number = 0; // instance (object) level

        constructor(beans: number){
            this.coffeeBeans = beans;
        }

        static makeMachine(coffeeBeans: number):CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        makeCoffee(shots: number): CoffeeCup{
            if(this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enougth coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            return {
                shots,
                hasMilk: false,
            };
        }
    }

    const maker = new CoffeeMaker(32);
}