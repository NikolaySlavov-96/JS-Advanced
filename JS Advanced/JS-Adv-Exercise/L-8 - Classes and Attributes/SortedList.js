class List {
    constructor() {
        this.arrNumber = [];
        this.size = this.arrNumber.length;
    }

    add(element) {
        this.arrNumber.push(element);
        this.arrNumber.sort((a, b) => a - b);
        this.size = this.arrNumber.length;
    }

    remove(index) {
        if(index >= 0 && index < this.arrNumber.length) {
            this.arrNumber.splice(index, 1);
            this.size = this.arrNumber.length;
        } else {
            throw new Error("Index doesn't exist");
        }
    }

    get(index) {
        if(index >= 0 && index < this.arrNumber.length) {
            return this.arrNumber[index];
        } else {
            throw new Error("Index doesn't exist");
        }
    }
}


let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(3));