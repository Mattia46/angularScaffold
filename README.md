## Angular 1.5 scaffold

The scaffold already has bower and npm package as well as karma as a test runner.
The test runner use Jasmine and mocha as a reporter.
You can personalize changing the setting in karma.conf.js

Be sure to have globally installed Karma and PhantomJS

```
$ sudo npm install -g phantomjs-prebuild 
$ npm install -g karma-cli
```

After you cloned the repo, run these:

You only need to run:
```
$ bower install
$ npm install
```

To run your test:
```
$ karma start karma.conf.js
```

Remenber to change the appName in:
 - app.js
 - test/unit/appSpec.js
 
