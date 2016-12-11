# starter-kit

The Starter-Kit uses Webpack, Typescript, Tslint, Karma, Mocha.

#### Inspiration came across:

1. [WebPack and ES6: A Better Way of Incorporating JavaScript Ecosystem into Rails](https://hackhands.com/fast-rich-client-rails-development-webpack-es6-transpiler/), 09/30/2014, Justin Gordon
2. [Angular 2: Why TypeScript?](https://vsavkin.com/writing-angular-2-in-typescript-1fa77c78d8e8#.istvs01i8), 07/22/2016, Victor Savkin
3. [TypeScript won](https://medium.com/@basarat/typescript-won-a4e0dfde4b08#.yj1h8u528), 04/27/2016, Basarat

#### Start a new project:

1. git clone the project
2. cd into the project
3. run `$ npm install` from comand line tool
4. install global dependency via command line tool
`$ npm i -g typescript tslint webpack webpack-dev-server`
6. execute `$ npm start` to start webpack-dev-server from comand line tool
7. navigate to 'http://localhost:8080/webpack-dev-server' at browser

#### Execute unit testing:

1. place `*.spec.ts` files inside modules close to productive code
2. run `$ npm test` command from command line tool