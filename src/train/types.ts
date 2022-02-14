//boolean
let isFetching: boolean = true;
let isLoading: boolean = false;

//number
let num: number = 5;

//string
let str: string = 'hello';

//arrays
const numberArray: number[] = [1,2,3,4,5,6];
const numberArray2: Array<number> = [1,2,3,4,5]; // generic types
const words: string[] = ['hello', 'ts'];

//tuple
const contact: [string, number] = ['abc', 123];

//any
let variable: any = 42;
variable = true;

//functions

function sayMyname(name: string): void {
    console.log(name);
}

sayMyname('hi');

//never

function throwrror(message: string): never {
    throw new Error('Error: i = 5');
}


const okok: undefined = undefined;
const koko: null = null;
//Type

type Login = string;

const login: Login = 'ok';

type Id = number | string;
const id1: Id = 1234;
const id2: Id = 'asd';

type SomeType = string | null | undefined;

//Enum 
enum memberShip {
    Simple,
    Standart,
    Premium
}

const membership = memberShip.Standart;
const membershipRevers = memberShip[1]
console.log(membership);
console.log(membershipRevers);

enum SocialMedia {
    VK = 'VK',
    Facebook = 'Facebook',
    Insagramm = 'Instagramm'
}

const social = SocialMedia.Insagramm
console.log(social)