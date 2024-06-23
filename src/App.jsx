import './App.css'
import './utils/css/utils.css'

import { HomePage, Login, NotFound } from './pages'
import PrimaryLayout from './components/Layouts/PrimaryLayout/PrimaryLayout'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './routes/ProtectedRoute'
import AdminPanel from './pages/AdminPanel/AdminPanel/AdminPanel'
import Actions from './pages/AdminPanel/Actions/Actions'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <PrimaryLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'login-page',
          element: <Login />,
        },
        {
          path: 'admin-panel',
          element: (
            <ProtectedRoute>
              <Outlet />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: <AdminPanel adminOnly={true} />,
            },
            {
              path: 'actions',
              element: <Actions />,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
  {
    basename: '/mizrahi-tefahot/',
  }
)
console.log(router.basename)
function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App
