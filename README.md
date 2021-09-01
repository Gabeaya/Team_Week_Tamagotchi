# Tamagotchi 2021 (Epicodus Team Week)

#### An application that seeks to recreate the experience of the Tamagotchi toy of the mid-nineties. 

#### **By Dylan Allison-Damitz, Gabe Ayala, Shane Graff, William Sercombe, and Sisi Vieira**

#### Table of Contents

1. [Technologies Used](#technologies)
2. [Description](#description)
3. [Setup/Installation Requirements](#setup)
4. [Specifications](#specs)
5. [Known Bugs](#bugs)
6. [License](#license)
7. [Contact Information](#contact)

## Technologies Used <a id="technologies"></a>

* Babel
* Bootstrap
* Canvas
* CSS
* css-loader
* eslint
* eslint-loader
* Gif powered!
* HTML5
* package-json
* Javascript
* Jest
* JQuery
* Node.js
* Node Package Manager
* popper.js
* style-loader
* webpack
* webpack-cli
* webpack-dev-server


## Description <a id="description"></a>
Upon starting the game, an egg appears and the egg hatches revealing "Gozi" which is the ghost version of a Tamagotchi. The user is obligated to care for their Tamagotchi or the poor thing will die. The animations will show the "state" of Gozi and whether or not it is happy, tired, sad, etc and what actions need to be taken to bring all the specs up to 100% for Gozi. Currently there are four action an user can select: feed, nap, clean and playwith. Currently only the hunger function works.


See below for setting up the build environment.

## Setup/Installation Requirements <a id="setup"></a>

1. Open the terminal on your local machine
2. Install [Node.js](https://nodejs.org/en/) if not already installed
3. Install [Nope Package Manager (npm)](https://www.npmjs.com/) if not already installed on your local machine. You can find installation instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js)
4. Navigate to the directory where you will be cloning the project to
5. Clone the project to your current directory using the following command: `git clone https://github.com/ShanGGraff/currency_exchanger/`
6. Make sure to `cd` into the the cloned project directory. Make sure to be in the root directory of the project
7. Run `npm install` in the terminal to install project environment and required dependencies 
8. Run `npm run build` to create production environment
9. If you'd like to run project in a development server run the following: _`npm run start`_
10. To run Lint, use the following command: `npm run lint`
11. To run tests with Jest, use the following: `npm test`

## Specifications <a id="specs"></a>

| Behavior | Input | Output |
|:---:|:---:|:---:|
|Gozi is born. There will be an egg hatching animation|Gozi's hunger levels go down automatically|Upon reaching 40% the animation changes showing that Gozi needs food. User should select the fork and knife icon to feed Gozi. Use the left or right button icon to select whether you'd like to feed, play with, clean or put Gozi down for a nap. Press the center button once the correct icon is selected for the action you'd like to perform|

![Tamagotchi Interface ](/assets/images/Readme.png)

## Known Bugs <a id="bugs"></a>
* The Instructions, Settings, and History tabs on the splash page are currently not implemented.
* Currently, only the fork and knife icon work to feed the Tamagatchi. The toilet paper icon, the cat sleeping icon and the controller icon, will switch animations when pushed, but don't actually interact with the Tamagatchi's hygeine, sleep, or boredom characterists. These features need to be implemented. 


## License
* [MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2021 Creators 

## Contact Information <a id="contact"></a>

* Dylan Allison-Damitz <dylandamitz@gmail.com>  
* Shane Graff <copellius@gmail.com>
* Sisi Vieira <cicy886@gmail.com>
* Gabe Ayala <gabeayala100@gmail.com>
* William Sercombe <wsercombe@gmail.com>
* Github page: https://github.com/Gabeaya/Team_Week_Tamagotchi