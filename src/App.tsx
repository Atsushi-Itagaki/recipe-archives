import React, { useState } from 'react'
import './App.css'
import AppHeader from './components/AppHeader'
import MainContents from './components/MainContent'
import RecipeArchives from './components/RecipeArchives'

export const setSectionContext = React.createContext({} as {
  setSection: React.Dispatch<React.SetStateAction<JSX.Element>>
})

const App: React.FC = (): JSX.Element => {
  const [section, setSection] = useState(<RecipeArchives />)

  return (
    <div className="app">
      <setSectionContext.Provider value={{ setSection }}>
        <AppHeader />
        <MainContents section={section} />
      </setSectionContext.Provider>
    </div>
  )
}

export default App