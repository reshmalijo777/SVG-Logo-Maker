const Circle= require('./circle.js');
const Square= require('./square.js');
const Triangle=require('./triangle.js');

describe('Circle',()=> {
    it('should display svg logo in blue color and a text SVG in White color', () => {
    const circle= new Circle('blue','white','SVG')
    expect(circle.render()).toEqual(
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <circle cx="150" cy="100" r="80" fill="blue"/>
  
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
    </svg>`)

    })

});

describe('Square',()=> {
    it('should display svg logo in red color and a text SVG in White color',()=>{
    const square= new Square('red','white','SVG')
    expect (square.render()).toEqual(
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

    <rect width="200" height="200" fill="red"/>
  
    <text x="100" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
  
    </svg>`)

});

});

describe('Triangle',()=> {
    it('should display svg logo in violet color and a text SVG in White color', () => {
    const triangle= new Triangle('violet','white','SVG')
    expect(triangle.render()).toEqual(`
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
    <polygon points="100,15 200,200 0,200" fill="violet"/>
     
    <text x="100" y="185" font-size="70" text-anchor="middle" fill="white">SVG</text>
  
    </svg>`);

});
});