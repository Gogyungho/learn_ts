{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
        hasSugar?: boolean;
    };


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        protected coffeeBeans: number = 0; // instance (object) level
        // 내부에서 private으로 외부에서 변경할 수 없게 숨겨(?) 놓는다. 

        constructor(beans: number){
            this.coffeeBeans = beans;
        }

        static makeMachine(coffeeBeans: number):CoffeeMaker {
            return new CoffeeMachine(coffeeBeans);
        }

        public fillCoffeeBeans(beans: number){ // 이 함수를 이용해서 내부의 상태를 변경 할 수 있다. 
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            } 
            this.coffeeBeans += beans;
        }


        private grindBeans(shots: number) {
            if(this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enougth coffee beans!');
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }
        private preheat():void{
            console.log('heating up....!');
        }

        private extract(shots: number): CoffeeCup{
            console.log(`Pulling ${shots} shots... `);
            return {
                shots,
                hasMilk: false,
            };
        }

        makeCoffee(shots: number): CoffeeCup{
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }
    
    class CoffeeLatteMachine extends CoffeeMachine {
        constructor(beans: number, public readonly serialNumber: string){
            super(beans)
        }
        private steamMilk():void {
            console.log('Steaming some milk...')
        }
        makeCoffee(shots: number): CoffeeCup {
            // super를 이용해 부모 클래스 함수에 접근할 수 있다. 
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            return {
                ...coffee,
                hasSugar: true,
            }
        }
    }

    const machine = new CoffeeMachine(23);
    const latteMachine = new CoffeeLatteMachine(32, 'SSSS')
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CoffeeLatteMachine(16, 'SSS'),
        new SweetCoffeeMaker(10),
    ];
    machines.forEach(machine => {
        console.log('------------');
        machine.makeCoffee(1);
    });
    // 다형성의 장점은 내부적으로 구현된 다양한 클래스들이 한가지 인터페이스를 구현하거나 
    // 또는 동일한 부모 클래스를 상속했을 때, 동일한 함수를 어떤 클래스인지 구분하지 않고, 공통된 api를 호출할수 있다는 장점이 있다. 
}