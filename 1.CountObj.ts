class Application{
    private name:string;
    static count:number = 0
    constructor(name:string) {
        this.name = name;
        Application.count++;
    }
}

console.log(Application.count);
let app1 = new Application('application1');
console.log(Application.count);
let app2 = new Application('application2');
console.log(Application.count);
let app3 = new Application('application3');
console.log(Application.count);
let app4 = new Application('application4');
console.log(Application.count);

