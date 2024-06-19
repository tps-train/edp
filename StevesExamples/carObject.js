// Object direct

var BMW_M5 = {
    color: "Black",
    engine: "Twin turbo V8",
    doors: 4,
    year: 2023,
    speed: 0,
    paintjob: function(newcolor) {
        this.color = newcolor
    }
}

BMW_M5.speedUp = function() {
    this.speed+=5
}

BMW_M5.slowDown = function() {
    this.speed-=5
}

for (i=0; i<10; i++) {
    BMW_M5.speedUp()
}
console.log(BMW_M5.speed)
console.log(BMW_M5.color)
BMW_M5.paintjob("Pink")
console.log(BMW_M5.color)
