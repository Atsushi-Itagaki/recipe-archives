import React from 'react'

const RecipeItem = ({ data }, {setRecipeData}) => {
  const handleDeleteRecipe = (e) => {
    e.preventDefault()

    const targetID = e.target.id

    fetch('http://localhost:3001/recipe_data__delete', {
      method: 'POST',
      mode: 'no-cors',
      body: targetID
    })
    .catch((error) => {
      console.log('Error:', error)
    })
  }

  return (
    <article className="recipe-item">
      <form action="" method="POST">
        <input
          type="submit"
          className="delete"
          value="削除"
          id={data.recipe_ID}
          onClick={(e) => handleDeleteRecipe(e)}
        />
      </form>
      <div className="recipe-item-content">
        <h2 className="recipe-item__name">{data.recipe_name}</h2>
        <p className="recipe-item__description">{data.recipe_description}</p>
      </div>
    </article>
  )
}

export default RecipeItem