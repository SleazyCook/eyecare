import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import ErrorPage from './containers/ErrorPage'

import Home from './containers/Home'
import Insurance from './containers/Insurance'
import Services from './containers/Services'
import Livingston from './containers/locations/Livingston'
import NewCaney from './containers/locations/NewCaney'
import Reviews from './containers/Reviews'

const appElement = document.getElementById('app')
const root = createRoot(appElement)

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'insurance',
                element: <Insurance />
            },
            {
                path: 'locations/livingston',
                element: <Livingston />
            },
            {
                path: 'locations/new-caney',
                element: <NewCaney />
            },
            {
                path: 'reviews',
                element: <Reviews />
            }
        ]
    }
])

root.render(<RouterProvider router={router} />);