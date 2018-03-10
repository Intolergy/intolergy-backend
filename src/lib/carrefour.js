
const request = require('request-promise')

module.exports = class CarrefourApi {
  static get URL () {
    return 'https://api.fr.carrefour.io/v1/openapi/items'
  }

	static get headers () {
		return {
			'accept': 'application/json',
			'content-type': 'application/json',
			'x-ibm-client-id': process.env.CARREFOUR_API_ID,
			'x-ibm-client-secret': process.env.CARREFOUR_API_SECRET
		}
	}

  static search (q) {
		return request({
      method: 'POST',
			uri: CarrefourApi.URL,
      headers: CarrefourApi.headers,
      json: true,
      body: {
        "queries": [
          {"query": q,"field":"barcodeDescription"}
        ]
      }
		})
  }

  static findProductByGTIN (gtin) {
    return request({
      uri: `${CarrefourApi.URL}/${gtin}`,
      headers: CarrefourApi.headers,
      json: true
    })
  }
}

