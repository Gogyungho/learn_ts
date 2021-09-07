{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    };


    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }
    // 클래스 앞에 abstract 를 붙이면 이 클래스 자체로 오브젝트를 만들수 없다. 
    abstract class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        protected coffeeBeans: number = 0; // instance (object) level
        // 내부에서 private으로 외부에서 변경할 수 없게 숨겨(?) 놓는다. 

        constructor(beans: number){
            this.coffeeBeans = beans;
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

        protected abstract extract(shots: number): CoffeeCup;

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

        protected extract(shots: number): CoffeeCup{
            this.steamMilk();
            return {
                shots,
                hasMilk: true,
            }
        }
    }

    class SweetCoffeeMaker extends CoffeeMachine {
        protected extract(shots: number): CoffeeCup{
            return {
                shots,
                hasSugar: true,
            };
        }
    }

    const machines: CoffeeMaker[] = [
        new CoffeeLatteMachine(16, 'SSS'),
        new SweetCoffeeMaker(10),
    ];
    machines.forEach(machine => {
        console.log('------------');
        machine.makeCoffee(1);
    });
}