import React from 'react'

type Props = {
  section: JSX.Element,
}

const MainContents: React.FC<Props> = (props): JSX.Element => {
  return (
    <main className="main">
      <div className="container">
        {props.section}
      </div>
    </main>
  )
}

export default MainContents