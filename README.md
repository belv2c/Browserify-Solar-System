# Browserify-Solar-System

### Sandwich Maker

#### Create a web page that will display important scientific data about all eight planets in our solar system. The information about each planet will be separate modules.

- Each module will export a single function named outputTo that will accept a single argument. That argument's value will be the DOM element reference into which it will insert information about a planet.
- Each module should output the following information: Name, year discovered, mass, size, distance from sun, atmosphere composition, satellites, and explorers that have visited/landed on that planet
- Create a main module that uses require to include each planet's module as a dependency and then subsequently calls the outputTo() method for each one, in the right order

![My image](https://user-images.githubusercontent.com/30091921/30514727-68d7c9f0-9ae0-11e7-8ced-f6bb94763c85.png)



#### How to run (Node must be installed on your machine):

```
https://github.com/belv2c/Browerify-Solar-System.git
cd Browserify-Solar-System
npm install http-server -g
hs -c-1
```

##### This will show in your browser at: http://localhost:8080