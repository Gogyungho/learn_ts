{
    // Enum

    //Javascript
    //자바스크립트에는 enum 타입이 존재하지 않기 때문에 타입스크립트에서 제공하는 타입이다. 
    const MAX_NUM = 6;
    const MAX_STUDENTS_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const DAYS_ENUM = Object.freeze({'MONDAY': 0, "TUESDAY": 1, "WEDNESDAY": 2});
    const dayOfToday = DAYS_ENUM.MONDAY;

    //Typescript
    enum Days{
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday,
    };
    // enum에 값을 따로 지정하지 않으면 monday 부터 0으로 지정된다. 숫자나 문자열도 할당이 된다. 
    // 문자열은 모두 할당해 줘야함
    // 하지만 typescript 에서 enum은 되도록 사용하지 않는다. 
    // enum을 쓰게되면 타입이 보장되지 않는다. 
}