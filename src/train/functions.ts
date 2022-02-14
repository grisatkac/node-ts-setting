const add = (a: number, b: number): number => {
    return a + b;
}

const toUpperCase = (str: string): string => {
    return str.toUpperCase();
}

//перегрузка функций
interface MyPosition {
    x: number | undefined;
    y: number | undefined;
};

interface MyPositionWithDefault extends MyPosition {
    default: string;
}

function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a:number, b: number): MyPosition

function position (a?: number, b?: number) {
    if (!a && !b) {
        return {
            x: undefined,
            y: undefined
        }
    }

    if (a && !b) {
        return {
            x: a,
            y: undefined,
            default: a.toString()
        }
    }

    return {
        x: a,
        y: b
    };
}

console.log(position())
console.log(position(100))
console.log(position(100, 100))