import RequestWrapper from './RequestWrapper'

export const IdpService = (function () {
    
    return {

        getToken: async function(data) {
            
            const response = {
                access_token: "Bearer 666"
            }
            return response

            /*
            return RequestWrapper({
                url:    'v1/get-token',
                method: 'POST',
                data: data
            })
            */
        }
    }
  })()