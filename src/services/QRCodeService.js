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

        }
    }
})()
