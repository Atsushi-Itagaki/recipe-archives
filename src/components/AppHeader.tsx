import React from 'react'
import NavigateSections  from './navigateSections'

const  AppHeader: React.FC = (): JSX.Element => {
  return (
    <header className="app-header">
      <h1 className="app-header-title">RECIPE ARCHIVES</h1>
      <NavigateSections />
    </header>
  )
}

export default  AppHeader