class Animal {

    constructor(name) {
        this.name=name;
    }
}

class Rabbit extends Animal {
    constructor(name) {
        super();
        this.name = name;
        this.created = Date.now();
    }
}

let rabbit = new Rabbit("White Rabbit");
alert(rabbit.name);


// bai 2

class Clock{
    constructor({template}) {
        this.template = template;
    }

    render() {
        let date = new Date();

        let hours = date.getHours();
        if(hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10 ) secs = '0' + secs;

        let output = this.template
            .replace('h',hours)
            .replace('m',mins)
            .replace('s',secs)
        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class Car{
    constructor(size){
        this.size = size
    }
    Brand(brand){
        this.brand=brand
    }
    Color(color){
        this.color = color
    }
}

class BMW extends Car{

}
let bmw = new BMW("large")
bmw.Brand("BMW")
bmw.Color("blue")

console.log(bmw.brand);

class LAMBO extends Car{

}

let Lambo = new LAMBO("small")
Lambo.Brand("Lambo")
Lambo.Color("Green")

console.log(Lambo);

class Toyota extends Car{

}

let toyota = new Toyota("medium")
toyota.Brand("toyota")
toyota.Color("grey")

console.log(toyota);