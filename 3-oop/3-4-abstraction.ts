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

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeans(beans: number): void;
        clean(): void;
    }


    class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level
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

        clean() {
            console.log('cleaning the machine...');
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


    const maker2: CommercialCoffeeMaker = new CoffeeMachine(32);
    maker2.makeCoffee(32);
    maker2.fillCoffeeBeans(10);
    maker2.clean();


    class AmateurUser {
        constructor(private machine: CoffeeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker){}
        makeCoffee(){
            const coffee = this.machine.makeCoffee(2);
            console.log(coffee);
            this.machine.fillCoffeeBeans(45);
            this.machine.clean();
        }

    }
    const maker: CoffeeMachine = new CoffeeMachine(32);
    const amateur = new AmateurUser(maker);
    const pro = new ProBarista(maker);
    pro.makeCoffee();
}