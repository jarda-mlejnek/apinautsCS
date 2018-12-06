import axios from "axios";
import md5 from "md5";

export const GravatarService = (function () {

    const client = axios.create()

    const request = function(options) {

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

        getGravatarUrl: function(emailOrName) {            
            const hash = md5(emailOrName);
            const uri = `https://www.gravatar.com/avatar/${hash}?d=robohash`;
            
            return uri
        }
	}
})()
