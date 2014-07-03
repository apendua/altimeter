# altimeter

A simple altimeter for Meteor.

# What?

Have you ever wondered how to implement a smart-package that behaves differently
in development environment? Here's the answer for you:
```
mrt install altimeter
```
and the thing is as easy as
```
if (Meteor.isDevelopment) {
  console.log('Hurray! I can do whatever I want.');
}
```
As a bonus feature (sic!), to prevent you from writing `!Meteor.isDevelopment`
the package also provides `Meteor.isProduction` variable. Have fun!
