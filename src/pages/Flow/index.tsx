import * as React from 'react'
import './index.css'
import Container from '../../components/Layout/Container'
import TopBar from './TopBar'
import Editor from './Editor'

const flow = (): React.ReactElement => {
  return (
    <Container>
      <TopBar />
      <Editor />
    </Container>
  )
}

export default flow
