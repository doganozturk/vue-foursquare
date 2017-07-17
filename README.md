# Vue-Foursquare

A SPA (Single Page App.) using Vue.js, vue-cli webpack template, SASS, Pugjs and consumes Foursquare API, especially public '/venues' endpoint. With that data,  you can search for cafes, pizza or sütlaç in any location you want. Results are shown in a beautiful interface and your last ten recent searches are there for you to visit again. When you click on one of the venues, application will take you to appropriate detail page where you can browse pictures of the place and tips by users.

### Demo
https://vue-foursquare.surge.sh

### Prerequisites

You need Node.js (v6.11.1), NPM and/or Yarn on your local machine. I strongly recommend usage of [NVM](https://github.com/creationix/nvm) for managing different versions of Node on your local machine.

### Installing

A step by step series of examples that tell you have to get a development env running

Vue-Foursquare uses Vue.js pre-made Webpack template as its base. So you have all commands that come with it and many more!

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:3003
yarn start

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report
```

## Running the tests and linters

Because of time constraints, tests and code coverage tasks are not ready for this project. But project makes heavy use of linters (ESLint, Stylelint and as a formatter, Prettier). All linting tasks are ready for your use; they also check your styles and scripts on every pre-commit.

If you use an text-editor or an IDE that has support for extensions of the mentioned above libraries you can have the comfort of a very robust development environment :)

## Deployment

Project uses Travis-CI for continuous integration and amazing Surge.sh as its host. You can make appropriate changes and use this project's setup as a boilerplate for your own projects.

## Authors

* **Doğan Öztürk** - [github](https://github.com/doganozturk)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
