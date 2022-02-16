class Typescript {
    version: string;
    constructor(version: string) {
        this.version = version;
    };

    info(name: string) {
        return `[${name}: Typescript version is ${this.version}]`;
    };
};

class Car {
    readonly model: string;
    readonly numberOfWheels: number = 4;
    constructor(theModel: string) {
        this.model = theModel;
    };
};

//
class Animal {
    protected voice: string = '';
    public color: string = 'black';
    private go() {
        console.log('Go');
    };
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
    
}

const animal = new Animal();

const cat = new Cat();

//

abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component {
    render(): void {
        console.log('render component');
    };

    info(): string {
        return 'this is info';
    };
}

