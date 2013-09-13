var OpenStates = require('./openstates');

// Load apiKey from config.json - you can replace this code and manually set your API key here
var nconf = require('nconf');
nconf.use('file', { file: './config.json' });
nconf.load();
var apiKey = nconf.get('apiKey');

var openstates = new OpenStates(apiKey);

/*
openstates.metadataOverview(function(err, json) {
  if (err) throw err;
  console.log(json);
});
*/

/*
openstates.metadataState('nc', function(err, json) {
  if (err) throw err;
  console.log(json);
});
*/

/*
openstates.billSearch({
  q: 'agriculture',
  state: 'ca',
  chamber: 'upper'
}, function(err, json) {
  if (err) throw err;
  console.log(json);
});
*/

/*
openstates.billDetail('nc', '2013', 'HB 589', function(err, json) {
  if (err) throw err;
  console.log(json);
});
*/

/*
openstates.legSearch({
  state: 'dc',
  chamber: 'upper'
}, function(err, json) {
  if (err) throw err;
  console.log(json);
});
*/

/*
openstates.legDetail('NCL000173', function(err, json) {
  if (err) throw err;
  console.log(json.full_name);
});
*/

/*
openstates.geoLookup(35.79, -78.78, function(err, json) {
  if (err) throw err;
  console.log(json);
});
*/

/*
openstates.comSearch({
  state: 'dc'
}, function(err, json) {
  if (err) throw err;
  console.log(json);
});
*/

/*
openstates.comDetail('DCC000029', function(err, json) {
  if (err) throw err;
  console.log(json);
});
*/

/*
openstates.eventSearch({
  state: 'tx'
}, function(err, json) {
  if (err) throw err;
  console.log(json);
});
*/

/*
openstates.eventDetail('TXE00026474', function(err, json) {
  if (err) throw err;
  console.log(json);
});
*/

/*
// with the chamber
openstates.districtSearch('nc', 'lower', function(err, json) {
  if (err) throw err;
  console.log(json);
});
*/

/*
// without the chamber
openstates.districtSearch('nc', function(err, json) {
  if (err) throw err;
  console.log(json);
});
*/

/*
openstates.districtBoundary('sldl/nc-120', function(err, json) {
  if (err) throw err;
  console.log(json);
});
*/