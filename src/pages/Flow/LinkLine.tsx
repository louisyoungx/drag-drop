import * as React from 'react'
import {
  Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot,
} from '@mui/lab'

const LinkLine = (): React.ReactElement => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>&nbsp;</TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default LinkLine
