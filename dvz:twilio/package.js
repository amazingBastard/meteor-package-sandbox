Package.describe({
  name: 'dvz:twilio',
  summary: ' Twilio Node Wrapper ',
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Npm.depends({ 'twilio': '1.10.0' });

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('Twilio', 'server');
  api.addFiles('dvz:twilio.js', ['server']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('dvz:twilio');
  api.addFiles('dvz:twilio-tests.js', ['client','server']);
});
