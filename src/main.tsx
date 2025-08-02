import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

import { ScrollToTop } from './components/ScrollToTop/ScrollToTop.tsx'

import App from './App.tsx'

import './index.sass'

createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<BrowserRouter basename='/kursnova-test/'>
			<ScrollToTop />
			<App />
		</BrowserRouter>
	</Provider>
)
