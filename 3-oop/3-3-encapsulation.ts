{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    };

    // public 따로 작성하지 않으면 모든것은 public으로 되어져 있다. 
    // private 외부에서 보여지지 않도록 함. 외부에서 내부 상태를 변경 할 수 있기 때문에..
    // protected

    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeeBeans: number = 0; // instance (object) level
        // 내부에서 private으로 외부에서 변경할 수 없게 숨겨(?) 놓는다. 

        constructor(beans: number){
            this.coffeeBeans = beans;
        }

        static makeMachine(coffeeBeans: number):CoffeeMaker {
            return new CoffeeMaker(coffeeBeans);
        }

        public fillCoffeeBeans(beans: number){ // 이 함수를 이용해서 내부의 상태를 변경 할 수 있다. 
            if(beans < 0){
                throw new Error('value for beans should be greater than 0');
            } 
            this.coffeeBeans += beans;
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
    maker.fillCoffeeBeans(32);  // 이런식으로 외부에서 이 함수를 사용해 내부 coffeebeans를 변경할 수 있다.

    // class User { 
    //     firstName: string;
    //     lastName: string;
    //     get fullName() : string{
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    //     constructor(firstName: string, lastName: string){
    //         this.firstName = firstName;
    //         this.lastName = lastName;
    //     }
    // }

    // class User { 
    //     get fullName() : string{
    //         return `${this.firstName} ${this.lastName}`;
    //     }
    //     constructor(private firstName: string, private lastName: string){
    //         // 생성자에 접근 제어자(private, public)를 설정해 두면 바로 맴버 변수로 설정이 된다. 
    //         // 이 코드와 위 코드는 동일한 코드이다. 
    //     }
    // }

    class User { 
        get fullName() : string{
            return `${this.firstName} ${this.lastName}`;
        }
        private internalAge = 4;
        get age(): number {
            return  this.internalAge;
        }
        set age(num: number) {
            this.internalAge = num;
        }

        constructor(private firstName: string, private lastName: string){
            // 생성자에 접근 제어자(private, public)를 설정해 두면 바로 맴버 변수로 설정이 된다. 
            // 이 코드와 위 코드는 동일한 코드이다. 
        }
    }

    const user = new User('go', 'ella');
    user.age = 6;
    // 외부에서 internalAge는 접근 할 수 없지만 age는 게터와 세터를 이용해서 접근할 수 있다. 결과적으로 internalAgedp 접근 해서 값을 업데이트 하는 것이다. 
    // 세터에서 전달된 값이 맞는지 유효성 검사도 할수 있다. 다양하게 활용해서 쓰면된다. 
}