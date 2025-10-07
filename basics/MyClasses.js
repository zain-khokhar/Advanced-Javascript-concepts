// how classes work in JS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

class reactangle {
    constructor(height , width) {
        this.height = height;
        this.width = width;
    }
   // adding a getter
    get area(){
        return this.clacarea();
    }

    clacarea(){
        return this.height * this.width;
    }

    *getSides(){
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }

}

const square = new reactangle(10,8);
console.log(square.area);
console.log([...square.getSides()]);