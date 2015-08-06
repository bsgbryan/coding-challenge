# coding challenge
[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-url]][daviddm-image]

A simple little module to calculate expenses for a department.


## Install

```bash
$ npm install --save coding-challenge
```


## Usage

```javascript
var codingChallenge = require('coding-challenge');
var employees = [
  {
    name: 'Drake',
    type: 'manager',
    employees: [
      {
        name: 'Sully',
        type: 'Developer'
      }, {
        name: 'Elena',
        type: 'QA Tester'
      }
    ]
  }
];
codingChallenge(employees);
```

## API

_(Coming soon)_


## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](http://gulpjs.com/).


## License

Copyright (c) 2015 Bryan Maynard. Licensed under the MIT license.



[npm-url]: https://npmjs.org/package/coding-challenge
[npm-image]: https://badge.fury.io/js/coding-challenge.svg
[travis-url]: https://travis-ci.org/bsgbryan/coding-challenge
[travis-image]: https://travis-ci.org/bsgbryan/coding-challenge.svg?branch=master
[daviddm-url]: https://david-dm.org/bsgbryan/coding-challenge.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/bsgbryan/coding-challenge
[coveralls-url]: https://coveralls.io/r/bsgbryan/coding-challenge
[coveralls-image]: https://coveralls.io/repos/bsgbryan/coding-challenge/badge.png
