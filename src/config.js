export const CONFIG = {
	WEB_API_KEY: 'fc1ee7c4-f2d0-4072-83df-4312b548c18e',
	API_BASE_PATH: 'https://www.csast.csas.cz/webapi/api/',
	BITCOIN: {
		API_BASE_PATH: 'https://community-bitcointy.p.mashape.com/',
		API_KEY: '015r8adUb1mshuHWLi4uVlW00JZHp1Xklyhjsnd0E55AVs2wfW',
	},
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
			// {
			// 	label: 'OTHER',
			// 	link: '/app/other'
			// },
            // {
            //     label: 'GRAPH',
            //     link: '/app/graph'
			// },
			{
				label: 'SUMMARY',
				link: '/app/summary'
			},
			// {
			// 	label: 'ERROR',
			// 	link: '/app/hmmm'
			// },
            {
                label: 'LOGIN',
                link: '/app/login'
            },
            {
                label: 'MEETING',
                link: '/app/meeting'
            }
		]
    },
    FIREBASE_SCHEMAS: {
        ITEMS: 'people-test'
    }
}