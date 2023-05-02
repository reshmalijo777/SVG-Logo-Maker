const Circle =require("./circle");
const Square= require("./square");
const Triangle= require("./triangle");


function setShape(response){
    if(response.shape ==='Circle'){
        let userInput= new Circle(response.shapeColor,response.text,response.textColor);
        return userInput.render();
    }

    if(response.shape ==='Square'){
        let userInput= new Square(response.shapeColor,response.text,response.textColor);
        return userInput.render();
     }

    if(response.shape ==='Triangle'){
        let userInput= new Triangle(response.shapeColor,response.text,response.textColor);
        return userInput.render();
        }

    };

module.exports=setShape;
