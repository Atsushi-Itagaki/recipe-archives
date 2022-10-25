import React, { useContext } from 'react'

const MainContents = ({ component }) => {
  return (
    <main className="main">
      {component}
    </main>
  )
}

export default MainContents