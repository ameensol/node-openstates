# node-openstates
A node.js wrapper for the Sunlight Foundation's Open States API.

Check out their docs [here](http://sunlightlabs.github.io/openstates-api/).


## Installation

```
npm install openstates
```

## Usage

```
var OpenStates = require('./openstates');

var openstates = new OpenStates(apiKey);

openstates.legDetail('NCL000173', function(err, json) {
  if (err) throw err;
  console.log(json.full_name);
});

// Roger West
```
There is a method for each Open States endpoint. Response is a JSON object.

## License
MIT
