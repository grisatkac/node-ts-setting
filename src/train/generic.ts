const arrayOfNumbers: Array<number> = [23,45];
const arrayOfStrings: Array<string> = ['a','b','c'];


function reverse<T>(array: T[]): T[] {
    return array.reverse();
}

reverse(arrayOfNumbers);
reverse(arrayOfStrings);
