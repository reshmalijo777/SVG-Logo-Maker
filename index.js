const inquirer = require('inquirer');
const fs= require('fs');
const fileName= "./examples/logo.svg"
const setShape= require('./lib/setShape.js')

const questions=[
    {
        type:'list',
        message:'What is the shape of your logo?',
        name:'shape',
        choices:['Circle', 'Square', 'Triangle'],
    },

    {
        type:'list',
        message:'what is the color of your shape?',
        name:'shapeColor',
        choices:['red','blue','green','orange'],

        validate:(answer)=>{
            for(var i=0, length=shapeColor.length; i<length;i++){
                if(answer.indexOf(shapeColor[i])!=-1){
                    return true;
                }
               }
               return console.log("Enter a valid color")
        }
    },
    
    {
        type:'input',
        message:'What text to print(3 letters maximum) on logo?',
        name:'text',

    },

];
function logo(response){
 const svg= setShape(response);
 fs.writeFile(fileName,svg,()=>console.log('created svg logo'));
}

function init(){
    inquirer
    .prompt(questions)
    .then((response)=> {
    logo(response);
    });
}
init();
