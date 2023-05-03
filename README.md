# SVG-Logo-Maker

## Description

This is a SVG logo maker that allows user to make choice of shape (circle, square,triangle) with choice of colors and a text with 3 charecter with a text color of choice.

- [Video-Demo.webm](https://user-images.githubusercontent.com/128992593/235828602-5f0e7e8b-374f-46a1-bd10-51c8a934fbb0.webm)

## Table Of Contents

  * [Usage](#usage)
  * [Installation](#installation)
  * [Testing](#testing)
  * [License](#license)
  * [Contributors](#contributors)
  * [Questions](#Questions)

## Usage

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Installation

  To run this project we need to install Node.js. Then create a `.gitignore` file and include `node_modules/` and `.DS_Store/` so that your `node_modules` directory isn't tracked or uploaded to GitHub. We need `package.json` with the required dependencies. You can create one by running `npm init -y` when you first set up the project, before installing any dependencies.

## Testing

Each shape class should be tested for a `render()` method that returns a string for the corresponding SVG file with the given shape color. Type "npm run test" in the command line to run the test file.

## License

  None

## Contributors
  - Reshma Paul

  ## Questions

  If you have any Questions,<br>
  Contact me at snowley777@gmail.com
