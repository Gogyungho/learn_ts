{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // abstraction 추상화는 인터페이스를 굉장히 심플하게 만들어서 사용하는 사람이 간편하게 사용할수 있도록 해준다. 
    // 마찬가지로 캡슐화를 이용해서 외부에서 내부 함수 값에 접근 못하게 할 수 있다. private 이용
    // 정말 필요한 함수만 노출해서 간단하게 만드는 것을 추상화 라고 한다. 

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }
    // interface를 구현(implements)하는 클래스에서는 interface에 적혀있는 함수를 모두 구현해 주어야 한다. 

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
    
    // interface를 구현할때는 inplements를 사용하고, 다른 클래스를 상속하떄는 extends를 사용한다. 
    // 자식클래스에서 부모클래스에 있는 함수를 덮어 씌울수 있다. 이것을 over writing 이라고 한다. 
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

    const machine = new CoffeeMachine(23);
    const latteMachine = new CoffeeLatteMachine(32, 'SSSS')
    const coffee = latteMachine.makeCoffee(1);
    console.log(coffee);
}