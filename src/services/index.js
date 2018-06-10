import axios from "axios";

// Because this is an app for studying purposes
// and the app consumes a public API
// I put this credentials in worst possible way :(
const CLIENT_ID = "J4SO4AHBQFW0ETDH2EG4JPEUQ5XQLVRKIE30QVAJNXPQ25SV";
const CLIENT_SECRET = "J3QK4CHLJ2BE4URDDCGXXBNF3PXGV35YV0SG1E3L2WXGN54T";
const VERSION_DATE = "20170715";

const HTTP = axios.create({
  baseURL: `https://api.foursquare.com/v2/venues`
});

/**
 * GET Venues
 *
 * @param {object} body / {location: location, query: query}
 * @returns {object}
 */
HTTP.fetchVenues = async body => {
  try {
    const url = `/explore?near=${body.location}&query=${body.query}&limit=10&venuePhotos=1&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION_DATE}`;
    const response = await HTTP.get(url);

    return {
      success: true,
      response: response.data.response.groups[0].items
    };
  } catch (error) {
    return {
      success: false,
      response: error
    };
  }
};

/**
 * GET a Venue by its ID
 *
 * @param {string} id
 * @returns {object}
 */
HTTP.fetchVenueById = async id => {
  try {
    const url = `/${id}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION_DATE}`;
    const response = await HTTP.get(url);

    return {
      success: true,
      response: response.data.response.venue
    };
  } catch (error) {
    return {
      success: false,
      response: error
    };
  }
};

/**
 * GET Venue Photos by Venue ID
 *
 * @param {string} id
 * @returns {object}
 */
HTTP.fetchVenuePhotos = async id => {
  try {
    const url = `/${id}/photos?limit=12&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${VERSION_DATE}`;
    const response = await HTTP.get(url);

    return {
      success: true,
      response: response.data.response.photos.items
    };
  } catch (error) {
    return {
      success: false,
      response: error
    };
  }
};

export default HTTP;
