import * as React from 'react'
import { RouteObject } from 'react-router-dom'
// import Home from '../pages/Home'
import Flow from '../pages/Flow'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Flow />,
  },
  {
    path: '/flow',
    element: <Flow />,
  },
]

export default routes
