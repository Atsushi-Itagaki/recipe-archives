import React from 'react'
import SectionNav from './SectionNav'

const  AppHeader: React.FC = (): JSX.Element => {
  return (
    <header className="app-header">
      <h1 className="app-header-title">RECIPE ARCHIVES</h1>
      <SectionNav/>
    </header>
  )
}

export default  AppHeader