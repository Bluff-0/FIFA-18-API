# FIFA-18-API
It's a API containing all details 17891 players listed in FIFA 18, accessible with their rank. Taken best rank as 0 [zero - as the array convention] ending at 17890.

## Getting Started

Simply the project can be deployed in a Node environment. To install all necessery node modules used here, it's always preferable to use
```
npm install .
```

### Prerequisites

Few node modules are required to run this file in local server like,
body-parser
express
mongodb
mongoose
expect
```
npm install express@4.17.1 --save
npm install mongodb@2.2.5  --save
npm install mongoose@4.5.9 --save
//and so on
```


## Running the tests

For the test, package.json has to be changed

### Break down into end to end tests

using mocha.js,tests can be done, to install mocha:
```
npm i mocha@3.0.2--save-dev
```
Script modifications are necessery:
```
"scripts": {
    "start": "node server/server.js",
    "test": "mocha server/**/*.test.js",
    "test-watch": "nodemon --exec \"npm test\""
  }
```
### And coding style tests

## Deployment

Usual express.js deployment

## Built With

* [Atom](http://www.atom.io/) - The text editor used
* [Node.js](https://www.nodejs.org/) - Application compiler used
* [NPM Modules]


## Versioning

---0.0.1--- 

## Authors

* **Saptarshi Mazumdar** - *Initial work* - [Bluff-0](https://github.com/Bluff-0)

See also the list of [contributors](https://github.com/Bluff-0/FIFA-18-API/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Bluff-0/FIFA-18-API/blob/add-license-1/License.md) file for details

## Acknowledgments

* I am obliged to my virtual instructor Andrew J Mead whose course helped me a lot to prepare this API.
