import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { setSectionContext } from '../App'
import RecipeArchives from './RecipeArchives'
import PostRecipe from './PostRecipe'

type Section = {
  (section: JSX.Element): void
}

const SectionNav: React.FC = () => {
  const { setSection } = useContext(setSectionContext)

  const handleSetSection: Section = (section) => {
    setSection(section)
  }

  return (
    <nav className="section-nav">
      <ul className="list">
        <li className="item">
          <button
            className="button"
            onClick={() => handleSetSection(<RecipeArchives />)}
          >
            <FontAwesomeIcon icon={faUtensils} className="icon" />
          </button>
        </li>
        <li className="item">
          <button
            className="button"
            onClick={() => handleSetSection(<PostRecipe/>)}
          >
            <FontAwesomeIcon icon={faPlus} className="icon" />
          </button>
        </li>
      </ul>
    </nav>
    // <nav className="navigation">
    //   <ul className="navigation-list">
    //     <li className="navigation-item">
    //       <button
    //         className="navigation-button"
    //         onClick={() => setComponent(<RecipeArchives />)}
    //       >
    //         <FontAwesomeIcon icon={faUtensils} className="navigation-button-icon" />
    //       </button>
    //     </li>
    //     <li className="navigation-item">
    //       <button
    //         className="navigation-button"
    //         onClick={() => setComponent(<RecipeForm />)}
    //       >
    //         <FontAwesomeIcon icon={faPlus} className="navigation-button-icon" />
    //       </button>
    //     </li>
    //   </ul>
    // </nav>
  )
}

export default SectionNav