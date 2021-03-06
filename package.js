  Package.describe({
  name: 'gameofpirates:gameofpirates-theme',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.5.1');
  api.use('ecmascript');
  api.addFiles([
     'stylesheets/main.css',
     'stylesheets/login.css'
   ], 'client');
  api.mainModule('gameofpirates-theme.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('gameofpirates-theme');
  api.mainModule('gameofpirates-theme-tests.js');
});
