# LechaimCli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.1.

The purpose of the project is to give Lechaim ltd a nice GUI to work with in order to manage the matching and dating system. the App will hold the data of Candidates and representatives. and the connections between them. its a POC of angular 4 for me

## stack
json-server : JSON Server is a very useful npm module, open source and released under the MIT licence,
              that allows developers to prototype their Back End quickly. When the actual real API will be ready,
              it will just be a matter of switching the base URL your Front End sends requests to
faker : Generate Fake Data to use on the client as json, using twitter API. was chose due the abillity to generate large amount of data 
        to imitt real world application.

## Dependencies and instructions
        Install angular-cli - npm install -g @angular/cli
        Install json-server npm package globally - npm install -g json-server

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `json-server --watch db.json` to generate json data. 

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
