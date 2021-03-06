 class Vec{

    constructor(y, x){
        this.y = y;
        this.x = x;
    }

    plus(vector){
        this.y += vector.y;
        this.x += vector.x;
        return this;
    }

    minus(vector){
        this.y -= vector.y;
        this.x -= vector.x
        return this;
    }

        get length() {
        return(Math.sqrt((this.x * this. x) + (this.y * this.y)));
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
