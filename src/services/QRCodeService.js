export const QRCodeService = (function () {

    return {
        getLoginPageQRCode: function (meetingId) {
            let url = window.location.toString()
            let urlParts = url.split('/')
            let lastSegment = urlParts.pop() || urlParts.pop()
            url = url.substring(0, url.indexOf(lastSegment) - 1)

            console.log(lastSegment);
            return 'http://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' +
                url + '/login?id=' + meetingId

        },

        create_UUID: function () {
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
