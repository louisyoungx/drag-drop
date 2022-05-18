import * as React from 'react'

interface IContainer {
  children: React.ReactNode,
}

const Container = (props: IContainer): React.ReactElement => {
  const { children } = props
  return (
    <div className="container">
      {children}
    </div>
  )
}

export default Container
