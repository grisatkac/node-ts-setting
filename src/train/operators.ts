interface Person {
    name: string;
    age: number;
}

type PesonKeys = keyof Person;

const MyKey: PesonKeys = 'age';

