//basic interface
interface IRect {
    readonly id: string;
    color?: string;
    size: {
        height: number;
        width: number;
    }
}

const rect1: IRect = {
    id: '123',
    size: {
        height: 200,
        width: 200
    },
    color: '#ccc'
};

const rect2: IRect = {
    id: '567',
    size: {
        height: 300,
        width: 300
    }
};

rect2.color = '#fff';

const rect3 = {} as IRect;
const rect4 = <IRect>{}

//interface extend
interface RectWithArea extends IRect {
    getArea: () => number;
}

const rect5: RectWithArea = {
    id: '123',
    size: {
        width: 400,
        height: 400
    },
    getArea(): number {
        return this.size.width * this.size.height;
    }
}

//interface implement
interface IClock {
    time: Date;
    setTime: (date: Date) => void;
}

class Clock implements IClock {
    time = new Date();
    setTime (date: Date): void{
        this.time = date;
    };
}


//dynamic params in interface
interface Styles {
    [key: string]: string;
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}