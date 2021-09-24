function rectangle(width, height, color) {
    let newColor = color.replace(color[0], color[0].toUpperCase());

    const result = {
        "width":  Number(width),
        "height": Number(height),
        "color":  newColor,
        calcArea
    };

    function calcArea() {
        return this.width * this.height
    }

    return result;
    
}

let myRectangle = rectangle(5,4,'blue')
console.log(myRectangle)
console.log(myRectangle.calcArea());