import { RouteObject, useRoutes, BrowserRouter } from 'react-router-dom'
import * as React from 'react'
import Home from '../pages/Home'

const Routes = (): React.ReactElement => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Home />,
    },
  ]
  return useRoutes(routes)!
}

const Router = (): React.ReactElement => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

export default Router
