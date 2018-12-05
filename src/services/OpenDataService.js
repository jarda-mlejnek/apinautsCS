import axios from "axios";

export const OpenDataService = (function () {

    const client = axios.create()

    const request = function(options) {

        // client.defaults.headers.common['Accept'] = 'application/json'

        const onSuccess = function(response) {
            console.debug('Request Successful!', response)
            return response.data
        }

        const onError = function(error) {
            console.error('Request Failed:', error.config)

            if (error.response) {
                console.error('Status:',  error.response.status)
                console.error('Data:',    error.response.data)
                console.error('Headers:', error.response.headers)
            } else {
                console.error('Error Message:', error.message)
            }

            return Promise.reject(error.response || error.message)
        }

        return client(options)
            .then(onSuccess)
            .catch(onError)
    }

	return {

        getOpenData: async function() {
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

			const uri = 'http://opendata.praha.eu/dataset/fcbc860a-b111-43d3-9979-4a419bb281fb/resource/' +
				'f5b30f2c-8a6c-4597-87e7-76e801cce4de/download/8d04cae5-3968-4fdd-9574-4cb0c3b73ed2-meteocidla.csv';

            return request({
				baseURL: proxyUrl + uri,
                method: 'GET'
            })
        }
	}
})()
