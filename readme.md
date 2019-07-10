## Lazy Filter

[![Build Status](https://travis-ci.org/pallab-gain/lazy-filter.svg?branch=master)](https://travis-ci.org/pallab-gain/lazy-filter) [![Coverage Status](https://coveralls.io/repos/github/pallab-gain/lazy-filter/badge.svg?branch=master)](https://coveralls.io/github/pallab-gain/lazy-filter?branch=master)
#### Remove or filter out value, or list of values from JSON object lazily.

#### Install package
```js
npm install lazyfilter
```

#### How to use the library

```
const user = {
  "firstName" :  "Pallab",
  "lastName" :  "Gain",
  "email" : "example@mail.com"
  "password": "my secrect password",
  "id": "my-secret-id"
}
```



*Nodejs/react like example*

```
// initialize
const {
  omit,
  pick
} = require('lazyfilter');

// user object filter
const filteredUser = omit(user, ["password","id","email"])
const filteredUser = pick(user, ["password","id","email"])
```



*Browser example*

```
// add the library in your html
<script src="/dist/lazyfilter.js"></script>

// user object filtering
const omitedUser = LazyFilter.omit(user, ["password","id","email"])
const pickedUser = LazyFilter.pick(user, ["password","id","email"])
```



#### Install devependecies and build library

- Install dependencies

  `npm install`

- Build non-minified version of the library

  `npm run build-dev`

- Build library and use in production

  `npm run build-prod`

  You will find the library in `dist` folder

- Update or generate api doc

  `npm run generate-doc`  
  
- Run tests

  `npm run test`
