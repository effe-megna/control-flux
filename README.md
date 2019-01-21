# control-flux

[![Build Status](https://travis-ci.org/effe-megna/control-flux.svg?branch=master)](https://travis-ci.org/effe-megna/control-flux)
[![npm package][npm-badge]][npm]
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
<a href="https://twitter.com/intent/tweet?text=A React declarative approach with control-flux, or something like that: https://github.com/effe-megna/control-flux">
        <img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social"/>
    </a>

🎈 **control-flux** provide components that mimic some methods of javascript, for a pure **declarative** approach, or something like that.

## Installation

Use the package manager npm to install control-flux.

```javascript
npm i control-flux
```

## 👓 Some example

You can filter by property for display the right user
```javascript
import { FilterBy } from "control-flux"

export const User = () => {
  return (
    <FilterBy
      on={[
        { username: "Francis", type: "admin" },
        { username: "John", type: "guest" },
        { username: "Kit", type: "guest" }
      ]}
      property="username"
      predicate={username => username === "Francis"}
    >
      {user => <User {...user} /> }
    </FilterBy>
  )
}
```

or display n times a component
```javascript
import { Times } from "control-flux"

export const Times = () => {
  return (
    <Times n={3}>
      <BedsIcon />
    </Times>
  )
}
```

or filter and join
```javascript
import { Filter, Join } from "control-flux"

export const Useless = () => {
  return (
    <Filter
      on={["really", "wtf", "amazing"]}
      predicate={v => v !== "wtf"}
    >
      {wordsFiltered => (
        <Join
          on={wordsFiltered}
          separator=" ✌️ "
        >
          {v => v}
        </Join>
      )}
    </Filter>
  )
}

result: really ✌️ amazing
```

## API
<details>
<summary>Array.prototype</summary>

- Every
- Filter
- Map
- Some
- Includes
- Sort
- Fill
- Find
- FindIndex
- Join
- Reverse
- Reduce
- ReduceRight

</details>

<details>
<summary>Object.prototype</summary>

- ObjectKeys
- ObjectEntries
</details>

<details>
<summary>Extra</summary>

- FilterBy
- First
- Last
- Times
- If
</details>

## 🚶 Developed By

```
Francesco Megna
```
- [LinkedIn](https://www.linkedin.com/in/francesco-megna-19a266162)

# 👍 How to Contribute
1. Fork it
2. Create your feature branch (git checkout -b my-new-feature)
3. Commit your changes (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create new Pull Request

# 👷 Roadmap
* Normalize api based on [MDN doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
* Expand the components taking inspiration from other javascript prototypes.

# 📃 License

    MIT License
    
    Copyright (c) 2019 Francesco Megna
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.



[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
