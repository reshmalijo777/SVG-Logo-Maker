const inquirer = require('inquirer');
const fs= require('fs');
const setShape= require('./lib/setShape.js');
const fileName= "./examples/logo.svg";

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
        choices:['Blue ', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow'],

        validate:(answers)=>{
            for(var i=0, length= shapeColor.length; i<length;i++){
                if(answers.indexOf(shapeColor[i])!=-1){
                    return true;
                }}

               return console.log("Enter a valid color")
            }
        },
        
    
    {
        type:'list',
        message:'what is the color of text charecter?',
        name:'textColor',
        choices:['white','black','aqua'],

        validate:(answers)=>{
            for(var i=0, length= textColor.length; i<length;i++){
                if(answers.indexOf(textColor[i])!=-1){
                    return true;
                }}
                
        }
    },
    {
        type:'input',
        message:'Enter the text to print on logo(maximum 3 charecters)',
        name:'text',
        validate:(answer) => {
            if(answer.length>3){
              return console.log("\n Enter 3 charecter or less to print text!!!")
            }
            return true;
        }
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
