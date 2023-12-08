const Shape = require("./shapes")

class Circle extends Shape {
    constructor() {
        super()
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="11" width="300" height="200"><circle cx="150" cy="100" r="80" fill="${this.ShapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">"${this.text}"</text></svg>`
    }
}
module.exports=Circle 