import * as React from 'react'
import { Button, ButtonGroup } from '@mui/material'
import {
  AltRoute, Sync, Superscript, KeyboardReturn, DesignServices,
} from '@mui/icons-material'

const buttons = [
  <Button key="branch" startIcon={<AltRoute />}>Branch</Button>,
  <Button key="loop" startIcon={<Sync />}>Loop&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>,
  <Button key="formula" startIcon={<Superscript />}>Frmula</Button>,
  <Button key="return" startIcon={<KeyboardReturn />}>Return</Button>,
]

const CreateStep = (): React.ReactElement => {
  return (
    <div className="card create-step">
      <div className="create-step-side create-step-left">
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          {buttons}
        </ButtonGroup>
      </div>
      <div className="create-step-side create-step-right">
        <Button
          variant="contained"
          key="operation"
          className="create-step-main"
          startIcon={<DesignServices />}
        >
          Operation
        </Button>
      </div>
    </div>
  )
}

export default CreateStep
