function addAge(constructor: Function) {
    constructor.prototype.age = 18;
}

@addAge
class Hello {
    name: string;

    age: number;

    constructor() {
        // this.age = 100;
        console.log('hello');
        this.name = 'yugo';
    }
}

console.log('@@@@@@@@@@@@@@@@@@@@@@@@'); // 18
console.log(Hello.prototype.age); // 18
const hello = new Hello();
console.log('@@@@@@@@@@@@@@@@@@@@@@@@'); // 18

console.log(hello.age); // 18

export default Hello;
