var altimeter = Npm.require('altimeter');
var path = Npm.require('path');

Meteor.isDevelopment = altimeter.path.indexOf(path.resolve('.')) < 0;
Meteor.isProduction = !Meteor.isDevelopment;
