# node-openstates
A node.js wrapper for the Sunlight Foundation's Open States API.
## Installation

`npm install openstates`

## Usage
```
openstates.legDetail('NCL000173', function(err, json) {
  if (err) throw err;
  console.log(json.full_name);
});

// Roger West
```