import React from 'react'
import NavigationTabs from './NavigationTabs'

const AppHeader = () => {
  return (
    <header className="app-header">
      <h1 className="app-header-title">RECIPE ARCHIVES</h1>
      <NavigationTabs />
    </header>
  )
}



export default AppHeader