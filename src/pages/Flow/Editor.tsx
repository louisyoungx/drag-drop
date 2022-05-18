import * as React from 'react'
import CreateStep from './CreateStep'

const Editor = (): React.ReactElement => {
  return (
    <div className="canvas">
      <div className="flow-line">
        <CreateStep />
      </div>
    </div>
  )
}

export default Editor
