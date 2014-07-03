
Npm.depends({
  'altimeter': '0.0.1'
});

Package.describe({
  summary: "A simple altimeter for Meteor.",
});

Package.on_use(function (api) {

  api.add_files([
    'altimeter.js'
  ], 'server');

});
