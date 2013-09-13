var qs      = require('querystring'),
    request = require('request');

var OpenStates = module.exports = function(apiKey) {
  if (!(this instanceof OpenStates)) { return new OpenStates(apiKey) }
  if (!apiKey) throw new Error('Must provide API Key');
  this.key = apiKey;
}

OpenStates.prototype.makeRequest = function(method, params, callback) {
  // creates and executes an HTTP request
  if (typeof callback != 'function') {
    throw new Error('callback must be a function');
  }
  var options = this.createOptions(method, params, this.key);
  return this.executeRequest(options, callback);
};

OpenStates.prototype.createOptions = function(method, params, key) {
  // generates the options for the http request from the method, params, and key
  var query = qs.stringify(params);

  return {
    url: 'http://openstates.org/api/v1/' + method + '/?' + 'apikey=' + key + '&' + query,
    agent: false,
    headers: {
      "User-Agent": "Mozilla/4.0 (compatible; sunlight node.js client)",
      "Content-type": "application/x-www-form-urlencoded"
    }
  };
};

OpenStates.prototype.executeRequest = function(options, callback) {
  // executes the HTTP request with the given options

  request(options, function(err, res, body) {
    console.dir(options);
    if (!err && res.statusCode == 200) {
      callback(null, JSON.parse(body));
    } else {
      callback(new Error('Request failed with ' + res.statusCode));
    }
  });
};


// Get list of all states with data available and basic metadata about their status
OpenStates.prototype.metadataOverview = function(callback) {
  var params = {};
  this.makeRequest('metadata', params, callback);
};

// Get detailed metadata for a particular state
OpenStates.prototype.metadataState = function(state, callback) {
  var params = {};
  this.makeRequest('metadata/' + state, params, callback);
};

/* Search bills by (almost) any of their attributes, or full text
 * For possible params, go to http://sunlightlabs.github.io/openstates-api/bills.html#methods/bill-search
 */
OpenStates.prototype.billSearch = function(params, callback) {
  this.makeRequest('bills', params, callback);
};

// Get full detail for bill, including any actions, votes, etc.
OpenStates.prototype.billDetail = function(state, session, id, callback) {
  var params = {};
  id = encodeURIComponent(id);
  this.makeRequest('bills/' + state + '/' + session + '/' + id, params, callback);
};

/* Search legislators by their attributes.
 * For possible params, go to http://sunlightlabs.github.io/openstates-api/legislators.html#methods/legislator-search
 */
OpenStates.prototype.legSearch = function(params, callback) {
  this.makeRequest('legislators', params, callback);
};

// Get full detail for a legislator, including all roles
OpenStates.prototype.legDetail = function(leg_id, callback) {
  var params = {};
  this.makeRequest('legislators/' + leg_id, params, callback);
};


// Lookup all legislators that serve districts containing a given point
OpenStates.prototype.geoLookup = function(lat, long, callback) {
  var params = {
    lat: lat,
    long: long
  };
  this.makeRequest('legislators/geo', params, callback);
};

/* Search committees by any of their attributes.
 * For params go to http://sunlightlabs.github.io/openstates-api/committees.html#methods/committee-search
 */
OpenStates.prototype.comSearch = function(params, callback) {
  this.makeRequest('committees', params, callback);
};

// Get full detail for committee, including all members.
OpenStates.prototype.comDetail = function(com_id, callback) {
  var params = {};
  this.makeRequest('committees/' + com_id, params, callback);
};

// Search events by state and type
OpenStates.prototype.eventSearch = function(params, callback) {
  this.makeRequest('events', params, callback);
};

// Get full detail for event
OpenStates.prototype.eventDetail = function(event_id, callback) {
  var params = {};
  this.makeRequest('events/' + event_id, params, callback);
};

// List districts for state (and optionally filtered by chamber)
OpenStates.prototype.districtSearch = function(state, chamber, callback) {
  var params = {};
  var urlPattern = 'districts/' + state;
  if (arguments.length == 2 && typeof arguments[1] == 'function') {
    callback = chamber;
  } else {
    urlPattern = urlPattern + '/' + chamber;
  }
  this.makeRequest(urlPattern, params, callback);
}

// Get geographic boundary for a district
OpenStates.prototype.districtBoundary = function(boundary_id, callback) {
  var params = {};
  this.makeRequest('districts/boundary/' + boundary_id, params, callback);
};
