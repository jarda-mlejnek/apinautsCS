export const CONFIG = {
	WEB_API_KEY: 'fc1ee7c4-f2d0-4072-83df-4312b548c18e',
	API_BASE_PATH: 'https://www.csast.csas.cz/webapi/api/',
	IDP: {
		BASE_URL: 'https://webapi.developers.erstegroup.com/api/csas/sandbox/v1/sandbox-idp/auth',
		REDIRECT_URL: 'https://your-redirect-uri.example.com/auth-completed&client_id=your_client_id&response_type=code&access_type=offline&state=csas-auth'   
	},
	STORAGE: {
		TOKEN: 'token'
	},
	GOOGLE_API_KEY: "AIzaSyDnQvUdu96ovAaVSESwv07QknFCg6dpgdc",
    MAP_SETTINGS: {
        ZOOM: 16,
        DISABLE_UI: true,
        DRAGGABLE: false
    },
	NAVIGATION_LINKS: {
		WELCOME: [
			{
				label: 'LOGIN',
				link: '/login?code=aaa'
			}
		],
		APP: [
			{
				label: 'HOME',
				link: '/app/home'
			},
			{
				label: 'OTHER',
				link: '/app/other'
			},
			{
				label: 'ERROR',
				link: '/app/hmmm'
			}
		]
    },
    FIREBASE_SCHEMAS: {
        ITEMS: 'items'
    }
}