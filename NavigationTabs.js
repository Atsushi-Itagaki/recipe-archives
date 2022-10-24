import React, { useState } from 'react'
import MainContents from './MainContents'
import { faKitchenSet, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import RecipeArchives from './RecipeArchives'
import RecipeForm from './RecipeForm'



const NavigationTabs = () => {
  const [tab, setTab] = useState(<RecipeArchives />)
  
  const handleTabSet = (component) => {
    setTab(component)
  }

  return (
    <div className="container">
      <nav className="navigation">
        <ul className="navigation-list">
          <li className="navigation-item">
            <button
              className="navigation-button"
              onClick={() => handleTabSet(<RecipeArchives />)}
            >
              <FontAwesomeIcon icon={faKitchenSet} />
            </button>
          </li>
          <li className="navigation-item">
            <button
              className="navigation-button"
              onClick={() => handleTabSet(<RecipeForm />)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </li>
        </ul>
      </nav>
      <MainContents tabComponent={tab} />
    </div>
  )
}

export default NavigationTabs