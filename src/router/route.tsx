import { type RouteObject } from 'react-router-dom'

import { Home } from '../pages/Home/Home'
import { PrivacyPage } from '../pages/Policy/PrivacyPage/PrivacyPage'
import { PersonalData } from '../pages/Policy/PersonalData/PersonalData'
import { AdsConsent } from '../pages/Policy/AdsConsent/AdsConsent'
import { CookieConsent } from '../pages/Policy/CookieConsent/CookieConsent'
import { TermsConsent } from '../pages/Policy/TermsConsent/TermsConsent'

const routes: RouteObject[] = [
	{
		path: '/',
		index: true,
		element: <Home />,
	},
	{
		path: '/privacy-policy',
		element: <PrivacyPage />,
	},
	{
		path: '/personal-data',
		element: <PersonalData />,
	},
	{
		path: '/ads-consent',
		element: <AdsConsent />,
	},
	{
		path: '/cookie-consent',
		element: <CookieConsent />,
	},
	{
		path: '/terms-consent',
		element: <TermsConsent />,
	},
]

export default routes
