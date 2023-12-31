import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'
import { useRoutes } from 'react-router-dom'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'

export default function useRouteElement() {
  const routeElement = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])

  return routeElement
}
