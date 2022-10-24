import React, { useRef } from 'react'

const RecipeForm = () => {
  const recipeNameRef = useRef();
  const recipeDescriptionRef = useRef();

  const handleAddRecipeData = (e) => {
    e.preventDefault();

    const inputData__name = recipeNameRef.current.value
    const inputData__description = recipeDescriptionRef.current.value

    fetch('http://localhost:3001/recipe_data', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        recipe_name: inputData__name,
        recipe_description: inputData__description,
      })
    })
      .then(response => {
        // response.json()
      })
      .then(data => {
        // console.log('Success:', data)
      })
      .catch((error) => {
        console.log('Error:', error)
      })

    recipeNameRef.current.value = null
    recipeDescriptionRef.current.value = null
  }

  return (
    <section className="recipe-form">
      <form action="" method="POST" className="recipe-form-contents">
        <table className="recipe-form-table">
          <tbody>
            <tr>
              <th>
                <label htmlFor="name">料理のタイトル：</label>
              </th>
              <td>
                <input
                  type="text"
                  name="recipe_name"
                  className="recipe-form-input__name"
                  id="name"
                  ref={recipeNameRef}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label htmlFor="description">料理の説明：</label>
              </th>
              <td>
                <textarea
                  name="recipe_description"
                  className="recipe-form__description"
                  id="description"
                  ref={recipeDescriptionRef}
                >
                </textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <input
        type="submit"
        className="recipe-form__submit"
        value="レシピ作成"
        onClick={(e) =>handleAddRecipeData(e)}
        />
      </form>
    </section>
  )
}

export default RecipeForm