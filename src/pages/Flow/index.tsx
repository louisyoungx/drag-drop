import * as React from 'react'
import './index.css'
import Container from '../../components/Layout/Container'
import AppBar from './AppBar'
import Canvas from './Canvas'

const flow = (): React.ReactElement => {
  return (
    <Container>
      <AppBar>
        <Canvas />
      </AppBar>
    </Container>
  )
}

export default flow
