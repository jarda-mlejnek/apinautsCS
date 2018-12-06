export const QRCodeService = (function () {

    return {
        getLoginPageQRCode: function (meetingId) {            
            const url = this.getMeetingUrl(meetingId)            
            return 'http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + url 
        },

        getMeetingUrl: function(meetingId) {            
            let url = window.location.href            
            url = url + 'app/login?id=' + meetingId;
           

            return url;
        },

        createUuid: function () {
            let dt = new Date().getTime();
            let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                let r = (dt + Math.random() * 16) % 16 | 0;
                dt = Math.floor(dt / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        }
    }
})()
