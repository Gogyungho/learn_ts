{
type Video = {
    title : string;
    author: string;
};
// [1,2].map(item => item * item); -> [1,4]

type Optional<T> = {
    [P in keyof T]?: T[P] 
    // for...in 과 동일함. T가 가지고 있는 키들 중에 하나의 P
    // T 타입에 있는 모든 키들을 순차적으로 P에 할당해 줌
};
type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]; 
}

type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {
    title : 'hi',
}

type Animal = {
    name: string;
    age: number;
};
const animal: Optional<Animal> = {
    age: 1,
}
animal.age = 3;

const video : ReadOnly<Video> = {
    title: 'hi',
    author: 'go',
    // 추후에 이 값들은 변경 할 수 없다. readonly 때문
};

// type VideoOptional = {
//     title?: string;
//     author?: string;
//     descrition?: string;
// }

// type VideoReadOnly = {
//     readonly title: string;
//     readonly author: string;
// }

    type Nullable<T> = { [P in keyof T]: T[P] | null};
    const obj2: Nullable<Video> = {
        title: null,
        author: 'hi',
    };

    type Proxy<T> = {
        get(): T;
        set(value: T): void;
    };

    type Proxify<T> = {
        [P in keyof T]: Proxy<T[P]>;
    }

}