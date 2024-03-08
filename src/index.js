import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App'
import ErrorPage from './containers/ErrorPage'

import Home from './containers/Home'
import Insurance from './containers/Insurance'
import Services from './containers/Services'
import Livingston from './containers/Livingston'
import NewCaney from './containers/NewCaney'

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
                path: 'insurance',
                element: <Insurance />
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'livingston',
                element: <Livingston />
            },
            {
                path: 'newcaney',
                element: <NewCaney />
            }
        ]
    }
])

root.render(<RouterProvider router={router} />);