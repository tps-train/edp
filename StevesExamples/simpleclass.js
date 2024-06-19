class Car {
    color;
    doors;
    year;
    speed;

    constructor(color, doors, year, speed) {
        this.color=color;
        this.doors = doors;
        this.year=year;
        this.speed=speed;
    }

    speedUp() {
        this.speed+=5
    }

    slowDown() {
        this.speed-=5
    }

    getSpeed() {
        return this.speed
    }

    paintjob(newcolor) {
        this.color = newcolor
    }
}

let BMW_M5 = new Car("Red",4,2023,0);
console.log(BMW_M5)
BMW_M5.speedUp()
console.log(BMW_M5.getSpeed())
BMW_M5.paintjob("Green")
console.log(BMW_M5)
let Jag_XK8 = new Car("British Racing Green",2,2002,0)
console.log(Jag_XK8)
console.log({...BMW_M5})
