Oculus-Street-View
==================================
Oculus rift street view point cloud viewer

![alt tag](https://raw.github.com/samsniderheld/oculusStreetView/master/screenshot.png)

The viewer uses node.js for simple server. You must have node.js on your computer. [Download](http://nodejs.org/)

To run, cd into the occulus rift directory and type:

```shell
node server.js
```

Then in your browser navigate to:

```shell
localhost:8080/index.html
```

The boiler plate uses oculus bridge to establish communication between the oculus headtracking and the web browser.
You can download the oculus bridge from here:

```shell
https://github.com/Instrument/oculus-bridge
```

basic three.js scene configs are located in config.js.

you can add your three.js elements to the scene in environment.js

the logic.js file is just an example of how you can separate you logic from the rest of the js files.
