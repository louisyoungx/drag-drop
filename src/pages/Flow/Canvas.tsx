import * as React from 'react'
import CreateStep from './CreateStep'
import LinkLine from './LinkLine'

const Canvas = (): React.ReactElement => {
  return (
    <div className="canvas">
      <div className="flow-line">
        <LinkLine />
        <CreateStep />
      </div>
    </div>
  )
}

export default Canvas
