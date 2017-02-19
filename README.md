# react-new-component
Create an initial '.js' file for reactjs component.

[![NPM Version][npm-image]][npm-url]    [![NPM Downloads][downloads-image]][downloads-url]



## Installation

```
$ npm install react-new-component -g
```



## Usage

```
$ new-comp App
```

Then, you should get 'App.js' in your project root directory and it looks like this!

```
import React, { Component } from 'react'

export default class extends Component {

    constructor(props) {
		super()
		this.state = {

		}
	}

    componentDidMount() {

	}

    render() {
        return(
            <div>
                this is a new component!
            </div>
        )
    }
}

const styles = {

}
```



## Command Line Options

```
  Options:
    -h, --help       output usage information
    -V, --version    output the version number
    -s, --semicolon  use semicolon in file
```



## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/react-new-component.svg
[npm-url]: https://www.npmjs.com/package/react-new-component
[downloads-image]: https://img.shields.io/npm/dm/react-new-component.svg
[downloads-url]: https://npmjs.org/package/react-new-component