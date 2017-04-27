# Kinvey Angular SDK
[Kinvey](http://www.kinvey.com) (pronounced Kin-vey, like convey) makes it ridiculously easy for developers to setup, use and operate a cloud backend for their mobile apps. They don't have to worry about connecting to various cloud services, setting up servers for their backend, or maintaining and scaling them.

## Installation

#### Using npm
Install and save the Kinvey Angular SDK:

```javascript
npm install --save kinvey-angular-sdk
```

Import the Kinvey Angular SDK (ES6):

```javascript
import Kinvey from 'kinvey-angular-sdk';
```

#### Using the Kinvey CDN

```html
<script src="https://download.kinvey.com/js/kinvey-angular-sdk-3.5.0.min.js"></script>
```

You will then need to inlcude `kinvey` as a dependency for your app.

```javascript
const app = angular.module('myApp', ['kinvey']);
app.run(['$kinvey'], function($kinvey) {
  // ...
});
```

## Browser Compatibility

The Kinvey PhoneGap SDK supports the following browsers and versions of PhoneGap/Cordova:

- On macOS: Safari, Chrome, Firefox
- On iOS: Safari, Chrome
- On Windows: Chrome, Firefox, Edge, Internet Explorer 11
- On Android: Chrome (Performance depends on device)
- On PhoneGap/Cordova: 5.x+

## Documentation

For more detailed documentation, see http://devcenter.kinvey.com/phonegap

## License
See [LICENSE](LICENSE) for details.

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for details on reporting bugs and making contributions.
