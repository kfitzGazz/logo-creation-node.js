class Shape{
    constructor(){
        this.text=""
        this.textColor=""
        this.shapeColor=""
    }
    setColor(textColor){
        this.textColor=textColor
    }
    setText(text){
        this.text=text
    }
    setShapeColor(shapeColor){
        this.ShapeColor=shapeColor
    }
    render(){
        return new Error("the child must create its own render function.")
    }
}
module.exports=Shape