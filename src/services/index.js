import axios from "axios";

const CLIENT_ID = "V131V0IPODZOAI4DH0TXB0W1VF4R1QCAHASGHJI35D3KJLWK";
const CLIENT_SECRET = "L5RZFRA1K2KPH33H12BFD3MECOJKEBIJSLP14KXYRYW3A5AF";
const VERSION_DATE = "20170715";

const HTTP = axios.create({
  baseURL: `https://api.foursquare.com/v2/venues`
});

/**
 * GET Venues
 *
 * @param {object} ctx / current Vue view-model object, 'this'
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

export default HTTP;
