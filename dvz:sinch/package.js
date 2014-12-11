Package.describe({
  name: 'dvz:sinch',
  summary: ' Sinch REST API ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('dvz:sinch.js', ['client','server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dvz:sinch');
  api.addFiles('dvz:sinch-tests.js', ['client','server']);
});
