import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext'
import ProtectedRoute from './routes/ProtectedRoute'

import DynamicLayout from './Layouts/DynamicLayout/DynamicLayout'
import {
  HomePage,
  Login,
  NotFound,
  Actions,
  AdminPanel,
  UsersTable,
} from './pages'

import './App.css'
import './utils/css/utils.css'
import AddUser from './pages/AdminPanel/AddUser/AddUser'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <DynamicLayout />,
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
            {
              path: 'users-data',
              element: <UsersTable adminOnly={true} />,
            },
            {
              path: 'add-user',
              element: <AddUser />,
            },
          ],
        },
      ],
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]
  // {
  //   basename: '/mizrahi-tefahot/',
  // }
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
