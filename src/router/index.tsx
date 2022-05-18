import * as React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import routes from './routes'

const Routes = (): React.ReactElement => useRoutes(routes)!

const Router = (): React.ReactElement => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)

export default Router
