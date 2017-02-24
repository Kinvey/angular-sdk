# Kinvey Angular SDK
[Kinvey](http://www.kinvey.com) (pronounced Kin-vey, like convey) makes it ridiculously easy for developers to setup, use and operate a cloud backend for their mobile apps. They don't have to worry about connecting to various cloud services, setting up servers for their backend, or maintaining and scaling them.

This npm package makes it very easy to connect your AngularJS app with Kinvey.

## How to use

### 1. Sign up for Kinvey
To use the SDK, sign up for Kinvey if you have not already done so. Go to the [sign up](https://console.kinvey.com/#signup) page, and follow the steps provided.

### 2. Install the SDK
You can install the module using npm:

```bash
npm install kinvey-angular-sdk --save
```

or

use our [DevCenter Download Page](http://devcenter.kinvey.com/angular/downloads) to download the SDK and save it to a file name `kinvey-angular-sdk.js` in your project.

### 3. Configure the SDK
If you installed the SDK with npm, include the sdk in your code using `require`.

```javascript
require('kinvey-angular-sdk');
```

If you downloaded the SDK and saved it to a file, add a script tag to your main html file to load the SDK.

```html
<script src="path/to/kinvey-angular-sdk.js"></script>
```

Next, use `$kinvey.initialize` to configure your app. Replace `<appKey>` and `<appSecret>` with your apps app key and secret. You can find these for your app using the [Kinvey Console App](https://console.kinvey.com).

```javascript
var initialized = false;
var app = angular.module('myApp', ['kinvey']);
app.run(['$kinvey', '$rootScope', '$location', function($kinvey, $rootScope, $location) {
  $rootScope.$on('$locationChangeStart', function(event, newUrl) {
    if (initialized === false) {
      event.preventDefault(); // Stop the location change
      // Initialize Kinvey
      $kinvey.initialize({
        appKey: '<appKey>',
        appSecret: '<appSecret>'
      }).then(function(activeUser) {
        initialized = true;
        $location..path($location.url(newUrl).hash); // Go to the page
      }).catch(function(error) {
        // ...
      });
    }
  });
}]);
```

## What’s next?
You are now ready to start building your awesome apps! Next we recommend diving into the [User guide](http://devcenter.kinvey.com/angular/guides/users) or [Data store guide](http://devcenter.kinvey.com/angular/guides/datastore) to learn more about our service, or explore the [sample apps](http://devcenter.kinvey.com/angular/samples) to go straight to working projects.

## Build
Execute `npm run build` to build the package.

## Release
[TravisCI](https://travis-ci.org/Kinvey/angular-sdk) will deploy the pacakge to [NPM](https://www.npmjs.com/package/kinvey-angular-sdk).

1. Checkout the master branch.
2. Update the CHANGELOG.md.
3. Execute `npm version [<newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease | from-git]`. See [Version Management](#version-management) for more info on incrementing the version.
4. Done.

### Version Management
Updating the package version should follow [Semantic Version 2.0.0](http://semver.org/):

* Major (x.0.0): when making an incompatible API changes.
* Minor (3.x.0): when adding functionality in a backwards-compatible manner.
* Patch (3.0.x): when making backwards-compatible bug fixes or enhancements.

## Test
The Kinvey Angular SDK is setup to run unit and end to end tests.

_Note: Before running any tests you will need to run `npm install` to install any dependencies required._

### Unit Tests
The steps for running the unit tests is as follows:

1. Open a terminal window and execute `npm test`.

### End to End Tests
The steps for running the end to end tests is as follows:

#### Start Selenium Web Server
1. Open a terminal window.
2. Change directory to the location of the project.
3. Execute `npm run e2e:server`. __Keep this terminal window open.__

#### Start App
1. Open a terminal window.
2. Change directory to the location of the project.
3. Execute `npm run e2e:app`. __Keep this terminal window open.__

#### Run End to End Tests
1. Open a terminal window.
2. Change directory to the location of the project.
3. Execute `npm run e2e:test`.


## License
See [LICENSE](LICENSE) for details.

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md) for details on reporting bugs and making contributions.
