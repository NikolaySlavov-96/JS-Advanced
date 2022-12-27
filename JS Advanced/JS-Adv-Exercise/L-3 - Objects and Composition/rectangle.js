function rectangle (width , height , color) {

    let firstLetter = color.substring(0 , 1).toUpperCase();
    let otherLetter = color.substring(1);

    color = firstLetter.concat(otherLetter)

    return {
        width,
        height, 
        color ,
        calcArea() {
            return width * height 
        }
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());