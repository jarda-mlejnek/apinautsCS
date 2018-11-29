import RequestWrapper from './RequestWrapper'

export const SomeService = (function () {
    
    return {

        sendMessage: async function(data) {
            return RequestWrapper({
                url:    'v3/places/branches/40',
                method: 'GET',
                data: data
            })
        },

        getBranch: async function(branchId) {

            if(!branchId) {
                throw new Error("aaa")
            }

            return RequestWrapper({
                url:    'v3/places/branches/' + branchId,
                method: 'GET'
            })
        }
    }
  })()
